"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, GraduationCap } from "lucide-react"

export function EducationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Knowledge Database
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400">{">"}</span> Educational background and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            // Replace bg-black with bg-gray-900
            // Replace bg-black with bg-gray-900
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-glow-sm">
              <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">Bachelors of Technology in Computer Engineering</h3>
                    <h4 className="text-purple-400 font-medium">Pimpri Chinchwad College of Engineering</h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-cyan-500" />
                    <span>08/2022 - 06/2026</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span>Pune, India</span>
                  </div>
                </div>

                <p className="text-gray-300">
                  Pursuing a Bachelor's degree in Computer Engineering with a focus on full-stack development, cloud
                  computing, and database management systems. Actively participating in extracurricular activities and
                  technical projects to enhance practical skills.
                </p>
              </div>

              {/* Animated circuit lines */}
              <motion.div
                className="absolute inset-0 circuit-animation opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg overflow-hidden"
                animate={{
                  backgroundPosition: ["0px 0px", "100px 100px"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 10,
                  ease: "linear",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
