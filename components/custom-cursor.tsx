"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Show cursor when it first moves
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button], input, label, select, textarea").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  return (
    <div className="cursor-container">
      <motion.div
        className="custom-cursor"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
          borderColor: clicked
            ? "rgba(0, 255, 255, 0.6)"
            : linkHovered
              ? "rgba(148, 0, 211, 0.6)"
              : "rgba(0, 255, 255, 0.4)",
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 200,
          damping: 20,
        }}
      />
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: position.x - 32,
          y: position.y - 32,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
          borderColor: clicked
            ? "rgba(0, 255, 255, 0.4)"
            : linkHovered
              ? "rgba(148, 0, 211, 0.4)"
              : "rgba(0, 255, 255, 0.2)",
        }}
        transition={{
          type: "spring",
          mass: 0.5,
          stiffness: 150,
          damping: 15,
          delay: 0.02,
        }}
      />
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
          opacity: hidden ? 0 : 1,
          backgroundColor: clicked ? "#00FFFF" : linkHovered ? "#9400D3" : "#00FFFF",
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 300,
          damping: 15,
        }}
      />
    </div>
  )
}
