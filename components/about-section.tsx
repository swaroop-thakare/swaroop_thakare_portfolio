"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Globe, Cloud, Terminal, Cpu, Server, Briefcase, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-cyan-500/50"></div>
            <p className="text-cyan-400 font-mono text-sm tracking-wider">ABOUT ME</p>
            <div className="h-px w-8 bg-cyan-500/50"></div>
          </div>

          <h2 className="text-3xl font-bold mb-2 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Identity Module
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400">{">"}</span> Swaroop Thakare – System Online...
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="perspective-1000"
          >
            <div className="relative group transform transition-all duration-500 hover:rotate-y-3 hover:rotate-x-3">
              <div className="relative overflow-hidden rounded-lg border border-cyan-500/30 bg-black/70 backdrop-blur-sm shadow-lg">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 animate-gradient-x"></div>

                {/* Background effects */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
                <div className="absolute inset-0 tech-grid opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Digital noise overlay */}
                <div className="absolute inset-0 digital-noise opacity-10"></div>

                {/* Data flow lines */}
                <div className="absolute inset-x-0 top-1/3 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="data-flow"></div>
                </div>
                <div className="absolute inset-x-0 bottom-1/3 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="data-flow" style={{ animationDelay: "1s" }}></div>
                </div>

                <div className="relative p-6 z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-gradient-to-br from-cyan-900/50 to-cyan-700/30 flex items-center justify-center border border-cyan-500/30 shadow-glow-sm">
                      <Terminal className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      Mission Directive
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Computer Engineering student with expertise in Full-Stack Development, Cloud Computing, Project
                    Management, and AI/ML technologies. Proficient in Database Management Systems, Web Development, and
                    AWS Cloud Solutions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Certified in Advanced SQL, MySQL, PostgreSQL, MongoDB, and React.js development. Successfully
                    contributed to impactful projects including an accessible public transportation system, a freelancer
                    management platform, and an AI-powered fake news detection system — each emphasizing scalability,
                    inclusivity, and performance.
                  </p>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    Skilled in implementing innovative solutions using Java, Python, SQL, and modern web technologies.
                    Experienced in Agile methodologies, sprint planning, stakeholder coordination, and tools like Jira,
                    Trello, and Confluence. Passionate about blending full-stack development, cloud solutions, and
                    machine learning to solve real-world challenges and deliver user-centric, data-driven outcomes.
                  </p>
                </div>

                {/* Tech data points */}
                <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-2 right-10 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700"></div>
                </div>

                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 border border-cyan-500/0 rounded-lg transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-glow"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="perspective-1000"
          >
            <Card className="border-purple-500/30 bg-black/70 backdrop-blur-sm overflow-hidden relative group transform transition-all duration-500 hover:rotate-y-3 hover:rotate-x-3 shadow-lg">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 animate-gradient-x"></div>

              {/* Background effects */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5"></div>
              <div className="absolute inset-0 tech-grid opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

              {/* Digital noise overlay */}
              <div className="absolute inset-0 digital-noise opacity-10"></div>

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

              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-gradient-to-br from-purple-900/50 to-purple-700/30 flex items-center justify-center border border-purple-500/30 shadow-glow-purple-sm">
                      <Cpu className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      Tech Arsenal
                    </h3>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="relative w-16 h-16"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Image
                      src="/images/spaceship.png"
                      alt="Spaceship"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-md -z-10"></div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { name: "Programming", icon: <Terminal className="h-4 w-4" />, color: "cyan" },
                    { name: "Web Development", icon: <Globe className="h-4 w-4" />, color: "purple" },
                    { name: "Databases", icon: <Database className="h-4 w-4" />, color: "cyan" },
                    { name: "Cloud & DevOps", icon: <Cloud className="h-4 w-4" />, color: "purple" },
                    { name: "Project Management", icon: <Briefcase className="h-4 w-4" />, color: "cyan" },
                    { name: "AI/ML", icon: <BarChart className="h-4 w-4" />, color: "purple" },
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-2 group/tech"
                      whileHover={{
                        scale: 1.05,
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div
                        className={`flex-shrink-0 w-7 h-7 rounded-md bg-gradient-to-br from-${tech.color}-900/50 to-${tech.color}-700/30 flex items-center justify-center border border-${tech.color}-500/30 group-hover/tech:border-${tech.color}-400/50 transition-all duration-300 shadow-glow-${tech.color}-xs`}
                      >
                        <div
                          className={`text-${tech.color}-400 group-hover/tech:text-${tech.color}-300 transition-colors`}
                        >
                          {tech.icon}
                        </div>
                      </div>
                      <span className="text-gray-300 group-hover/tech:text-cyan-300 transition-colors text-sm">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Terminal className="h-3.5 w-3.5" /> Programming
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Python (Advanced)", "C++"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                          className="inline-block px-2 py-0.5 rounded-md text-xs bg-gradient-to-br from-cyan-950/30 to-cyan-900/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default shadow-glow-cyan-xs"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5" /> Web Development
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "TypeScript",
                        "PHP",
                        "React.js",
                        "Next.js",
                        "Redux",
                        "Tailwind",
                        "Bootstrap",
                        "Node.js",
                        "Express.js",
                        "RESTful APIs",
                        "GraphQL",
                      ].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.8 + index * 0.03 }}
                          className="inline-block px-2 py-0.5 rounded-md text-xs bg-gradient-to-br from-purple-950/30 to-purple-900/20 border border-purple-500/30 text-purple-400 hover:bg-purple-900/30 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300 cursor-default shadow-glow-purple-xs"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 8px rgba(128, 0, 255, 0.5)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Database className="h-3.5 w-3.5" /> Databases
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["MongoDB", "Firebase", "MySQL", "SQL", "PL/SQL", "Data Modelling"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                          className="inline-block px-2 py-0.5 rounded-md text-xs bg-gradient-to-br from-cyan-950/30 to-cyan-900/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default shadow-glow-cyan-xs"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <Cloud className="h-3.5 w-3.5" /> Cloud & DevOps
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["AWS Cloud Foundations", "AWS Data Engineering", "Docker"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                          className="inline-block px-2 py-0.5 rounded-md text-xs bg-gradient-to-br from-purple-950/30 to-purple-900/20 border border-purple-500/30 text-purple-400 hover:bg-purple-900/30 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300 cursor-default shadow-glow-purple-xs"
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 8px rgba(128, 0, 255, 0.5)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5" /> Project Management
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Agile/Scrum", "Jira (Advanced)", "Confluence", "Slack", "Project Boards"].map(
                        (skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 1.1 + index * 0.05 }}
                            className="inline-block px-2 py-0.5 rounded-md text-xs bg-gradient-to-br from-cyan-950/30 to-cyan-900/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default shadow-glow-cyan-xs"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)",
                              transition: { duration: 0.2 },
                            }}
                          >
                            {skill}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <BarChart className="h-3.5 w-3.5" /> AI/ML
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Scikit-learn", "NLP", "Supervised Learning", "Model Evaluation", "A/B Testing"].map(
                        (skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                            className="inline-block px-2 py-0.5 rounded-md text-xs bg-gradient-to-br from-purple-950/30 to-purple-900/20 border border-purple-500/30 text-purple-400 hover:bg-purple-900/30 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300 cursor-default shadow-glow-purple-xs"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 0 8px rgba(128, 0, 255, 0.5)",
                              transition: { duration: 0.2 },
                            }}
                          >
                            {skill}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                      <Server className="h-3.5 w-3.5" /> Soft Skills
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Team Collaboration", "Communication", "Problem-Solving", "Ownership", "Adaptability"].map(
                        (skill, index) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 1.3 + index * 0.05 }}
                            className="inline-block px-2 py-0.5 rounded-md text-xs bg-gradient-to-br from-cyan-950/30 to-cyan-900/20 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/30 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default shadow-glow-cyan-xs"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)",
                              transition: { duration: 0.2 },
                            }}
                          >
                            {skill}
                          </motion.span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>

              {/* Data flow lines */}
              <div className="absolute inset-x-0 top-1/3 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="data-flow"></div>
              </div>
              <div className="absolute inset-x-0 bottom-1/3 h-0.5 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="data-flow" style={{ animationDelay: "1s" }}></div>
              </div>

              {/* Tech data points */}
              <div className="absolute inset-0 pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-2 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-700"></div>
              </div>

              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 border border-purple-500/0 rounded-lg transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-glow-purple"></div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
