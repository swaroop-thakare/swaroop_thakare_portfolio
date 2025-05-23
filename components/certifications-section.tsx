"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, FileText, Database, Code, Cloud, BarChart, Cpu, Server } from "lucide-react"

export function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "AWS APAC - Solutions Architecture Job Simulation",
      issuer: "Forage",
      year: "2025",
      icon: <Cloud className="h-5 w-5" />,
      credentialId: "jtaL8vRver4YkkNNR",
      text: "AWS Solutions Architecture",
    },
    {
      title: "Professional Certificate in Project Management",
      issuer: "MTF Institute of Management, Technology and Finance",
      year: "2025",
      icon: <FileText className="h-5 w-5" />,
      credentialId: "UC-71e1b9e8-b792-4c38-a75-90612001603",
      expiryDate: "Dec 2033",
      skills: ["Software Project Management"],
      text: "Project Management",
    },
    {
      title: "Deloitte Australia - Technology Job Simulation",
      issuer: "Forage",
      year: "2025",
      icon: <Server className="h-5 w-5" />,
      credentialId: "hhdqLy9NzLr3WoQc9",
      expiryDate: "Feb 2032",
      text: "Deloitte Technology",
    },
    {
      title: "KPMG UK - Audit Job Simulation",
      issuer: "Forage",
      year: "2025",
      icon: <BarChart className="h-5 w-5" />,
      credentialId: "ucvFkNa3aRJXWbkh9",
      skills: ["Critical Thinking"],
      text: "KPMG Audit",
    },
    {
      title: "Informatica Data Engineering Foundation",
      issuer: "Informatica",
      year: "2025",
      icon: <Database className="h-5 w-5" />,
      credentialId: "CurriculumPlayer&TargetUser 727333",
      expiryDate: "Jan 2035",
      skills: ["Data Engineering"],
      text: "Informatica Data Engineering",
    },
    {
      title: "HTML, CSS, JavaScript And React certification",
      issuer: "Udemy",
      year: "2024",
      icon: <Code className="h-5 w-5" />,
      credentialId: "swaroop-thakare-2",
      expiryDate: "Nov 2033",
      skills: ["React.js", "Cascading Style Sheets (CSS)", "HTML", "JavaScript"],
      text: "Web Development",
    },
    {
      title: "Python For Data Science Real Time Experience",
      issuer: "Udemy",
      year: "2024",
      icon: <Cpu className="h-5 w-5" />,
      credentialId: "UC-71e1b9e8-b792-4c38-a75-90612001603",
      expiryDate: "Jan 2033",
      skills: ["Data Science", "Python (Programming Language)"],
      text: "Python Data Science",
    },
    {
      title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      year: "2024",
      icon: <BarChart className="h-5 w-5" />,
      credentialId: "WW6TSK8iEdYEdZxsi",
      text: "Tata Data Visualization",
    },
    {
      title: "Master the Fundamentals and Advanced Techniques of SQL, MySQL, PostgreSQL, and MongoDB",
      issuer: "Udemy",
      year: "2024",
      icon: <Database className="h-5 w-5" />,
      credentialId: "swaroop-thakare-2",
      expiryDate: "Apr 2034",
      skills: ["MongoDB", "PostgreSQL", "PL/SQL"],
      text: "Database Mastery",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Data Engineering",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Software Project Management"],
      text: "AWS Data Engineering",
    },
    {
      title: "Data Engineering Virtual Internship",
      issuer: "All India Council for Technical Education (AICTE)",
      year: "2024",
      icon: <Database className="h-5 w-5" />,
      credentialId: "e3fdeaae4373565f7b30cf4e5af60d71",
      expiryDate: "Jan 2035",
      skills: ["Data Engineering"],
      text: "Data Engineering Internship",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      year: "2024",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Software Project Management"],
      text: "AWS Cloud Foundations",
    },
    {
      title: "Google AIML",
      issuer: "All India Council for Technical Education (AICTE)",
      year: "2024",
      icon: <Cpu className="h-5 w-5" />,
      credentialId: "71282766145110c029f5a122db864faf",
      expiryDate: "Jan 2034",
      text: "Google AI/ML",
    },
    {
      title: "Master Python and Dive into Generative AI with No Prior Experience",
      issuer: "Udemy",
      year: "2024",
      icon: <Code className="h-5 w-5" />,
      credentialId: "swaroop-thakare-2",
      expiryDate: "Jan 2034",
      skills: ["Natural Language Processing (NLP)", "TensorFlow", "Python (Programming Language)"],
      text: "Python & Generative AI",
    },
  ]

  return (
    <section id="certifications" ref={ref} className="py-20 relative">
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
              System Credentials
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400">{">"}</span> Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-cyan-400/50 relative group cyberpunk-card-glow perspective-1000"
              whileHover={{
                scale: 1.03,
                y: -5,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Small accent gradient at the top */}
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>

              <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg"></div>

              {/* Tech grid background */}
              <div className="absolute inset-0 tech-grid rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Data flow lines */}
              <div className="absolute inset-x-0 top-1/4 h-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="data-flow"></div>
              </div>
              <div className="absolute inset-x-0 bottom-1/4 h-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="data-flow" style={{ animationDelay: "1s" }}></div>
              </div>

              <div className="relative z-10 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400/70 transition-colors duration-300">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{cert.icon}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-purple-400" />
                    <motion.span className="text-sm text-purple-400" whileHover={{ scale: 1.1, color: "#d8b4fe" }}>
                      {cert.year}
                    </motion.span>
                  </div>
                </div>

                <h4 className="font-bold text-cyan-400 mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2 text-sm">
                  {cert.title}
                </h4>
                <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors">
                  Issued by: {cert.issuer}
                </p>

                {cert.credentialId && <p className="text-gray-400 text-xs mt-1">ID: {cert.credentialId}</p>}

                {cert.expiryDate && <p className="text-gray-400 text-xs mt-1">Expires: {cert.expiryDate}</p>}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-1.5 py-0.5 rounded-full bg-cyan-900/30 text-cyan-400 border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tech loading bar */}
                <div className="mt-4 tech-loading-bar opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

              {/* Tech data points */}
              <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-2 right-10 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700"></div>
              </div>

              {/* Glowing effect on hover */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur-sm -z-10 transition-opacity duration-300"
                animate={{
                  opacity: [0, 0.2, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
