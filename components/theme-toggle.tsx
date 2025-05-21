"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Power } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return null // Prevent rendering until mounted on client
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        // Replace bg-black with bg-gray-900
        className="relative bg-gray-900/50 border border-cyan-500/50 text-cyan-500 hover:bg-cyan-950/30 hover:text-cyan-400"
        className="absolute right-0 top-full mt-2 bg-gray-900/60 text-cyan-400 text-xs py-1 px-2 rounded border border-cyan-500/30 whitespace-nowrap"
      >
        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}

        {/* Power icon overlay */}
        <Power
          className={`absolute h-5 w-5 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </Button>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-0 top-full mt-2 bg-black/80 text-cyan-400 text-xs py-1 px-2 rounded border border-cyan-500/30 whitespace-nowrap"
        >
          System Power: {theme === "dark" ? "ON" : "OFF"}
        </motion.div>
      )}
    </div>
  )
}
