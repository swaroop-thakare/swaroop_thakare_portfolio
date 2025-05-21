"use client"

import { useEffect, useRef } from "react"

interface CyberpunkPlaceholderProps {
  width: number
  height: number
  text: string
  className?: string
}

export function CyberpunkPlaceholder({ width, height, text, className = "" }: CyberpunkPlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    // Set canvas CSS dimensions
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, "#000814")
    gradient.addColorStop(1, "#001233")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Draw grid pattern
    ctx.strokeStyle = "rgba(0, 255, 255, 0.1)"
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let y = 0; y <= height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Vertical grid lines
    for (let x = 0; x <= width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    // Draw circuit patterns
    ctx.strokeStyle = "rgba(148, 0, 211, 0.2)"
    ctx.lineWidth = 1

    // Random circuit lines
    for (let i = 0; i < 10; i++) {
      const startX = Math.random() * width
      const startY = Math.random() * height
      ctx.beginPath()
      ctx.moveTo(startX, startY)

      // Create a path with multiple segments
      let currentX = startX
      let currentY = startY
      for (let j = 0; j < 5; j++) {
        // Decide whether to move horizontally or vertically
        if (Math.random() > 0.5) {
          currentX += (Math.random() - 0.5) * 100
        } else {
          currentY += (Math.random() - 0.5) * 100
        }
        ctx.lineTo(currentX, currentY)
      }
      ctx.stroke()
    }

    // Draw nodes at circuit intersections
    ctx.fillStyle = "rgba(0, 255, 255, 0.4)"
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const radius = Math.random() * 3 + 1
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw text
    const fontSize = Math.min(width / 15, 24)
    ctx.font = `bold ${fontSize}px monospace`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    // Text shadow for glow effect
    ctx.shadowColor = "rgba(0, 255, 255, 0.8)"
    ctx.shadowBlur = 10

    // Draw main text
    ctx.fillStyle = "#00FFFF"

    // Handle multi-line text
    const words = text.split(" ")
    const lines = []
    let currentLine = words[0]

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + " " + words[i]
      const metrics = ctx.measureText(testLine)
      if (metrics.width > width * 0.8) {
        lines.push(currentLine)
        currentLine = words[i]
      } else {
        currentLine = testLine
      }
    }
    lines.push(currentLine)

    // Draw each line
    const lineHeight = fontSize * 1.2
    const totalTextHeight = lines.length * lineHeight
    const textY = height / 2 - totalTextHeight / 2 + lineHeight / 2

    lines.forEach((line, i) => {
      ctx.fillText(line, width / 2, textY + i * lineHeight)
    })

    // Draw decorative elements
    ctx.shadowBlur = 0
    ctx.strokeStyle = "rgba(0, 255, 255, 0.5)"
    ctx.lineWidth = 2

    // Top-left corner
    ctx.beginPath()
    ctx.moveTo(10, 10)
    ctx.lineTo(50, 10)
    ctx.moveTo(10, 10)
    ctx.lineTo(10, 50)
    ctx.stroke()

    // Bottom-right corner
    ctx.beginPath()
    ctx.moveTo(width - 10, height - 10)
    ctx.lineTo(width - 50, height - 10)
    ctx.moveTo(width - 10, height - 10)
    ctx.lineTo(width - 10, height - 50)
    ctx.stroke()

    // Draw scanning line animation
    let scanLineY = 0
    const animateScanLine = () => {
      // Clear previous scan line
      ctx.clearRect(0, scanLineY - 1, width, 2)

      // Redraw the part of the background that was cleared
      ctx.fillStyle = gradient
      ctx.fillRect(0, scanLineY - 1, width, 2)

      // Redraw grid lines if needed
      if (Math.floor(scanLineY / 20) === scanLineY / 20) {
        ctx.strokeStyle = "rgba(0, 255, 255, 0.1)"
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(0, scanLineY)
        ctx.lineTo(width, scanLineY)
        ctx.stroke()
      }

      // Draw new scan line
      scanLineY = (scanLineY + 1) % height
      ctx.strokeStyle = "rgba(0, 255, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, scanLineY)
      ctx.lineTo(width, scanLineY)
      ctx.stroke()

      requestAnimationFrame(animateScanLine)
    }

    animateScanLine()
  }, [width, height, text])

  return <canvas ref={canvasRef} className={className} />
}
