"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface RobotChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export function RobotChatbot({ isOpen, onClose }: RobotChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm RoboAssist, your AI assistant for Swaroop's portfolio. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      // Call the chatbot API
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input.trim() }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response from chatbot API")
      }

      const data = await response.json()

      // Add bot response after a short delay to simulate thinking
      setTimeout(() => {
        const botMessage: Message = {
          id: messages.length + 2,
          text: data.response || "I'm not sure how to respond to that. Can you try asking something else?",
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching chatbot response:", error)

      // Add error message
      setTimeout(() => {
        const botMessage: Message = {
          id: messages.length + 2,
          text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        // Replace bg-black with bg-gray-900
        className="fixed bottom-24 right-8 z-50 w-80 sm:w-96 h-[500px] bg-gray-900 border border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-800 bg-gradient-to-r from-gray-900 to-black">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">AI Assistant</h3>
              <p className="text-xs text-cyan-400">Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close chatbot"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-900 to-black">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-800 text-gray-100 border border-cyan-900"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {message.sender === "bot" ? (
                    <Bot className="h-4 w-4 text-cyan-400" />
                  ) : (
                    <User className="h-4 w-4 text-cyan-400" />
                  )}
                  <span className="text-xs text-cyan-400">{message.sender === "user" ? "You" : "RoboAssist"}</span>
                </div>
                <p className="whitespace-pre-line">{message.text}</p>
                <div className="text-right mt-1">
                  <span className="text-xs text-gray-500">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="mb-4 text-left">
              <div className="inline-block max-w-[80%] rounded-lg p-3 bg-gray-800 text-gray-100 border border-cyan-900">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs text-cyan-400">RoboAssist</span>
                </div>
                <div className="flex gap-1">
                  <span className="typing-dot"></span>
                  <span className="typing-dot animation-delay-200"></span>
                  <span className="typing-dot animation-delay-400"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-cyan-800 bg-gray-900">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-800 border border-cyan-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              disabled={isTyping}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  )
}
