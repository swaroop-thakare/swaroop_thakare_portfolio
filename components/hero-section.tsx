"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Download, ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 relative overflow-hidden">
      {/* Scrolling text banner */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-purple-900/50 via-cyan-900/50 to-purple-900/50 overflow-hidden">
        <div className="scrolling-text-container h-full flex items-center">
          <div className="scrolling-text text-cyan-500 font-mono text-sm tracking-wider">
            G.U.N.D.A.M SYSTEM • GENERAL UTILITY NON-DESTRUCTIVE AUTOMATION MODULE • G.U.N.D.A.M SYSTEM • GENERAL
            UTILITY NON-DESTRUCTIVE AUTOMATION MODULE •
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-500 rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 relative z-10">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                  <p className="text-cyan-400 font-mono text-sm tracking-wider">PORTFOLIO</p>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                  <span>Swaroop Thakare</span>
                  <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Computer Engineer
                  </span>
                </h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <p className="text-sm md:text-base text-gray-300 mb-8 max-w-lg leading-relaxed">
                    I am a Computer Engineering student with a strong foundation in full-stack development, product
                    thinking, and project management. I'm passionate about building innovative, scalable solutions using
                    emerging technologies such as React, Node.js, Python, and AI/ML.
                  </p>
                </motion.div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 rounded-full text-sm">
                    Full-Stack Developer
                  </span>
                  <span className="px-3 py-1 bg-purple-900/30 text-purple-400 border border-purple-500/30 rounded-full text-sm">
                    Cloud Computing
                  </span>
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 border border-green-500/30 rounded-full text-sm">
                    Database Administrator
                  </span>
                  <span className="px-3 py-1 bg-cyan-900/30 text-cyan-400 border border-cyan-500/30 rounded-full text-sm">
                    AI/ML Engineer
                  </span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-medium px-6 py-2 rounded-md shadow-glow relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-500 hover:bg-cyan-950/30 font-medium px-6 py-2 rounded-md relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">Contact Me</span>
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-500"
                      initial={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>

                  <Button
                    variant="ghost"
                    className="relative group px-6 py-2 overflow-hidden border border-purple-500/50 bg-black/30 hover:bg-purple-950/20"
                    asChild
                  >
                    <a href="/swaroop_thakare.pdf" download="Swaroop_Thakare_Resume.pdf">
                      <span className="relative z-10 flex items-center gap-2 text-purple-400 group-hover:text-purple-300">
                        <FileText className="h-4 w-4" />
                        Resume
                        <Download className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0" />
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </a>
                  </Button>
                </motion.div>

                {/* Social links */}
                <div className="mt-8 flex items-center gap-4">
                  <a
                    href="https://github.com/swaroop-thakare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/swaroop-thakare-136484259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:swaroopthakare@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href="tel:+919561060731" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Phone className="h-5 w-5" />
                  </a>
                  <div className="h-4 w-px bg-gray-700"></div>
                  <span className="text-gray-500 text-sm font-mono">Open to work</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-[400px] h-[400px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl"></div>

              <div className="relative">
                <Image
                  src="/images/gundam.png"
                  alt="Gundam Mecha"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
