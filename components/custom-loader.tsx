"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function CustomLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      // Play the video
      video.play().catch((error) => {
        console.error("Error playing video:", error)
      })

      // Listen for video end
      const handleVideoEnd = () => {
        setIsLoading(false)
        // Redirect to main content
        window.location.href = "#home"
      }

      // Set up event listeners
      video.addEventListener("ended", handleVideoEnd)

      return () => {
        video.removeEventListener("ended", handleVideoEnd)
      }
    }
  }, [isLoading])

  // Handle click to skip the loader
  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setIsLoading(false)
    window.location.href = "#home"
  }

  return (
    <>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gray-100/90 z-50 flex items-center justify-center cursor-pointer"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleSkip}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            src="/videoplayback%20(1).mp4"
            preload="auto"
            onError={(e) => {
              console.error("Video loading error:", e)
              setVideoError(true)
              setIsLoading(false)
            }}
          />
          <div className="absolute bottom-8 right-8 bg-gray-200/50 px-4 py-2 rounded-md border border-cyan-500/50 text-cyan-600 text-sm backdrop-blur-sm">
            Click anywhere to skip
          </div>
        </motion.div>
      )}
    </>
  )
}
