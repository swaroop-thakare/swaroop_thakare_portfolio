"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Code, Briefcase, Mail, Cpu, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      setScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "projects", label: "Projects", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/70 backdrop-blur-md border border-cyan-500/50 text-cyan-500 hover:bg-cyan-950/30 hover:text-cyan-400"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-4 z-40 hidden md:block transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}
      >
        <div
          className={`bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-full px-4 py-2 transition-all duration-300 ${scrolled ? "shadow-glow-sm" : ""}`}
        >
          <nav className="flex space-x-2">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full flex items-center gap-1.5 px-3 py-1.5 text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-cyan-500/20 text-cyan-400 shadow-glow-sm"
                    : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-950/30"
                }`}
              >
                <item.icon className="h-3.5 w-3.5" />
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md">
              <div className="flex flex-col h-full pt-20 px-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 py-4 border-b border-cyan-900/30 text-left ${
                      activeSection === item.id ? "text-cyan-400" : "text-gray-400"
                    }`}
                  >
                    <item.icon className={`h-5 w-5 ${activeSection === item.id ? "text-cyan-400" : "text-gray-500"}`} />
                    <span className="text-lg font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
