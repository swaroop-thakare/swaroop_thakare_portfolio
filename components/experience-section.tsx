"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Users, Camera, Globe, ChevronRight, Briefcase } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeExperience, setActiveExperience] = useState<number | null>(null)

  const experiences = [
    {
      title: "Public Relations Executive",
      company: "PCCOE ACM Student Chapter",
      period: "Full-time",
      location: "Pune, Maharashtra, India · On-site",
      description:
        "Managed communications between stakeholders, faculty, and external partners, ensuring seamless coordination of events and fostering strong professional relationships.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "cyan",
      achievements: [
        "Developed and executed strategic initiatives to enhance ACM's brand visibility on campus, resulting in a significant increase in event participation and engagement.",
        "Designed and distributed creative promotional materials, effectively leveraging social media platforms to boost event attendance and community involvement.",
        "Led a team of 10 members, mentoring junior team members to improve communication skills, organizational abilities, and team collaboration.",
      ],
      skills: ["Public Relations", "Social Media Marketing"],
      date: "Aug 2024 - Present · 9 mos",
    },
    {
      title: "Photography Lead",
      company: "International Relations Cell, PCCOE",
      period: "Full-time",
      location: "Pune, Maharashtra, India · On-site",
      description:
        "Directed and organized photography campaigns for college events, capturing over 500+ moments to create impactful visual narratives.",
      icon: <Camera className="h-5 w-5" />,
      color: "purple",
      achievements: [
        "Curated and edited a portfolio of high-quality photographs, enhancing event promotion and visibility across social media and college platforms.",
        "Collaborated with event coordinators to ensure alignment of visual content with event themes and branding.",
        "Mentored a team of student photographers, sharing technical skills and creative techniques to improve the overall quality of work.",
        "Spearheaded the creation of a digital archive for college events, ensuring easy access to visual content for promotional and historical purposes.",
      ],
      date: "Sep 2023 - Present · 1 yr 8 mos",
    },
  ]

  const extracurricular = [
    {
      title: "Coordinator of SWARTRANG",
      description: "Served as a Coordinator of SWARTRANG (a college-level festival)",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Head of Photography in ArtCircle",
      description: "Served as Head of Photography in ArtCircle",
      icon: <Camera className="h-5 w-5" />,
    },
    {
      title: "Member of International Relations Cell",
      description: "Served as a Head of the International Relations Cell",
      icon: <Globe className="h-5 w-5" />,
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Operational Logs
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400">{">"}</span> Professional experience timeline
          </p>
        </motion.div>

        {/* New 3D Card Experience UI */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30, rotateY: 25 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateY: activeExperience === index ? 0 : 15,
                    }
                  : { opacity: 0, y: 30, rotateY: 25 }
              }
              transition={{
                duration: 0.6,
                delay: 0.2 * index,
                type: "spring",
                stiffness: 100,
              }}
              className="perspective-1000 h-full"
              onClick={() => setActiveExperience(activeExperience === index ? null : index)}
            >
              <motion.div
                className={`relative h-full transform-gpu transition-all duration-500 ${
                  activeExperience === index ? "rotate-y-0" : "rotate-y-15"
                }`}
                whileHover={{
                  rotateY: 0,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className={`bg-black/70 backdrop-blur-sm border border-${exp.color}-500/30 rounded-lg p-6 h-full
                  transition-all duration-300 hover:border-${exp.color}-400/50 hover:shadow-glow-sm relative overflow-hidden`}
                >
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-md bg-${exp.color}-900/30 flex items-center justify-center 
                        border border-${exp.color}-500/30 group-hover:border-${exp.color}-400/70 transition-colors duration-300`}
                      >
                        <div className={`text-${exp.color}-400 group-hover:text-${exp.color}-300 transition-colors`}>
                          {exp.icon}
                        </div>
                      </div>
                      <div>
                        <h3
                          className={`text-xl font-bold text-${exp.color}-400 group-hover:text-${exp.color}-300 transition-colors`}
                        >
                          {exp.title}
                        </h3>
                        <h4 className="text-gray-300 font-medium">{exp.company}</h4>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className={`h-4 w-4 text-${exp.color}-500`} />
                        <span>{exp.date || exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className={`h-4 w-4 text-${exp.color}-500`} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Skills tags if available */}
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-1 rounded-full bg-${exp.color}-900/30 text-${exp.color}-400 border border-${exp.color}-500/30`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Expandable achievements */}
                    <AnimatePresence>
                      {activeExperience === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-700"
                        >
                          <h5 className={`text-sm font-semibold text-${exp.color}-400 mb-2`}>Key Achievements:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-start gap-2"
                              >
                                <ChevronRight className={`h-4 w-4 text-${exp.color}-400 mt-1 flex-shrink-0`} />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand/collapse button */}
                    <motion.button
                      className={`mt-4 text-${exp.color}-400 text-sm flex items-center gap-1 hover:text-${exp.color}-300 transition-colors`}
                      whileHover={{ x: 5 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveExperience(activeExperience === index ? null : index)
                      }}
                    >
                      {activeExperience === index ? "Hide details" : "View achievements"}
                      <ChevronRight
                        className={`h-3 w-3 transition-transform ${activeExperience === index ? "rotate-90" : ""}`}
                      />
                    </motion.button>
                  </div>

                  {/* Glowing border effect on hover */}
                  <div
                    className={`absolute inset-0 border border-${exp.color}-500/0 rounded-lg transition-all duration-300 group-hover:border-${exp.color}-500/50 group-hover:shadow-glow-${exp.color}`}
                  ></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Extracurricular Activities</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {extracurricular.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="bg-black/70 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-5 transition-all duration-300 
                  hover:border-cyan-400/50 hover:shadow-glow-sm relative group overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-md bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
                      <div className="text-cyan-400">{activity.icon}</div>
                    </div>
                    <h4 className="font-bold text-cyan-400">{activity.title}</h4>
                  </div>

                  <p className="text-gray-300 text-sm">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
