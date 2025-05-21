"use client"

import { useState } from "react"
import { Bot } from "lucide-react"
import { motion } from "framer-motion"
import { RobotChatbot } from "./robot-chatbot"

export function FloatingChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Bot className="w-6 h-6" />
        <span className="mr-1">Chat with AI Assistant</span>

        {/* Pulsing animation */}
        <span className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-25"></span>
      </motion.button>

      <RobotChatbot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
