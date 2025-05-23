"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Linkedin, Mail, MessageSquare, Phone, MapPin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send the form data to the API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      setIsSubmitting(false)
      console.error("Error submitting form:", error)
      // You could add error state handling here
      alert("Failed to send message. Please try again later.")
    }
  }

  // Update the socialLinks array with all contact information
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/swaroop-thakare-136484259/",
    },
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/swaroop-thakare" },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:swaroopthakare@gmail.com",
      label: "swaroopthakare@gmail.com",
    },
    { name: "Phone", icon: <Phone className="h-5 w-5" />, url: "tel:+919561060731", label: "+91 9561060731" },
    { name: "Location", icon: <MapPin className="h-5 w-5" />, url: "#", label: "Pune, India" },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Establish Connection
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400">{">"}</span> Send a transmission to initiate contact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-cyan-500/30 bg-black/50 backdrop-blur-sm overflow-hidden h-full relative group hover:border-cyan-400/50 hover:shadow-glow-sm transition-all duration-300">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
                    <MessageSquare className="h-5 w-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">Contact Info</h3>
                </div>

                <p className="text-gray-300 mb-6">
                  Feel free to reach out for collaborations, opportunities, or just to say hello. I'll get back to you
                  as soon as possible.
                </p>

                <div className="space-y-4 mb-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target={link.name !== "Location" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-md border border-cyan-500/30 bg-black/30 text-gray-300 hover:bg-cyan-950/30 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 group/link cyberpunk-card"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="text-cyan-400 group-hover/link:text-cyan-300 transition-colors">{link.icon}</div>
                      <span>{link.label || link.name}</span>

                      {/* Holographic effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover/link:opacity-20 transition-opacity duration-500 pointer-events-none holographic-overlay rounded-md"></div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-purple-500/30 bg-black/50 backdrop-blur-sm overflow-hidden h-full relative group hover:border-purple-400/50 hover:shadow-glow-purple transition-all duration-300">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10"></div>

              <CardContent className="p-6 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="bg-black/50 border-purple-500/30 text-gray-300 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/30 cyberpunk-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="bg-black/50 border-purple-500/30 text-gray-300 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/30 cyberpunk-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      required
                      rows={5}
                      className="bg-black/50 border-purple-500/30 text-gray-300 placeholder:text-gray-500 focus:border-purple-400 focus:ring-purple-400/30 cyberpunk-input"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white border-none relative group/btn overflow-hidden cyberpunk-button-glow"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          Sending
                          <span className="flex gap-1">
                            <span className="animate-ping h-1 w-1 rounded-full bg-white"></span>
                            <span className="animate-ping h-1 w-1 rounded-full bg-white animation-delay-200"></span>
                            <span className="animate-ping h-1 w-1 rounded-full bg-white animation-delay-400"></span>
                          </span>
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>

                    {/* Button animation effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                  </Button>

                  {/* Success message */}
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-md bg-green-950/30 border border-green-500/30 text-green-400 text-sm"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
