"use client"

import { useEffect, useState } from "react"
import { motion, useAnimate, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true)

      let currentIndex = 0
      let currentText = ""

      const typeNextWord = () => {
        // Reset current text
        currentText = ""
        animate(scope.current, { text: currentText }, { duration: 0 })

        // Get the current word
        const word = words[currentIndex].text
        const chars = word.split("")

        // Type the word character by character
        let charIndex = 0
        const typeChar = () => {
          if (charIndex < chars.length) {
            currentText += chars[charIndex]
            animate(scope.current, { text: currentText }, { duration: 0.05 })
            charIndex++
            setTimeout(typeChar, 50)
          } else {
            // Word is fully typed, pause before erasing
            setTimeout(eraseWord, 2000)
          }
        }

        // Erase the word character by character
        const eraseWord = () => {
          if (currentText.length > 0) {
            currentText = currentText.slice(0, -1)
            animate(scope.current, { text: currentText }, { duration: 0.05 })
            setTimeout(eraseWord, 30)
          } else {
            // Word is fully erased, move to next word
            currentIndex = (currentIndex + 1) % words.length
            setTimeout(typeNextWord, 500)
          }
        }

        // Start typing the current word
        typeChar()
      }

      // Start the typing animation
      typeNextWord()
    }
  }, [isInView, animate, scope, words, started])

  return (
    <motion.div ref={scope} className={cn("text-base flex items-center", className)}>
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className={cn("block w-[4px] h-4 md:h-6 bg-cyan-400 ml-1", cursorClassName)}
      ></motion.span>
    </motion.div>
  )
}
