"use client"

import { useEffect, useRef } from "react"

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawGrid()
    }

    // Draw the grid
    const drawGrid = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid settings
      const gridSize = 40
      const smallGridSize = 8

      // Main grid lines (cyan)
      ctx.strokeStyle = "rgba(0, 255, 255, 0.15)"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Smaller grid lines (subtle)
      ctx.strokeStyle = "rgba(0, 255, 255, 0.05)"
      ctx.lineWidth = 0.5

      // Horizontal small lines
      for (let y = 0; y <= canvas.height; y += smallGridSize) {
        if (y % gridSize !== 0) {
          // Skip if it's already a main line
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }
      }

      // Vertical small lines
      for (let x = 0; x <= canvas.width; x += smallGridSize) {
        if (x % gridSize !== 0) {
          // Skip if it's already a main line
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()
        }
      }

      // Add some glowing dots at intersections
      ctx.fillStyle = "rgba(0, 255, 255, 0.6)"
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          // Random chance to draw a dot
          if (Math.random() < 0.1) {
            ctx.beginPath()
            ctx.arc(x, y, 1.5, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      // Add some purple dots for contrast
      ctx.fillStyle = "rgba(148, 0, 211, 0.4)"
      for (let x = 0; x <= canvas.width; x += gridSize * 2) {
        for (let y = 0; y <= canvas.height; y += gridSize * 2) {
          // Random chance to draw a dot
          if (Math.random() < 0.15) {
            ctx.beginPath()
            ctx.arc(x, y, 1, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }
    }

    // Initial setup
    resize()

    // Add pulse animation
    let opacity = 0.15
    let increasing = true

    const animate = () => {
      if (increasing) {
        opacity += 0.001
        if (opacity >= 0.2) increasing = false
      } else {
        opacity -= 0.001
        if (opacity <= 0.1) increasing = true
      }

      ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`
      drawGrid()
      animationFrame = requestAnimationFrame(animate)
    }

    let animationFrame = requestAnimationFrame(animate)

    // Handle resize
    window.addEventListener("resize", resize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
