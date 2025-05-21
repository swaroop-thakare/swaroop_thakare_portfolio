"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Database,
  Globe,
  Server,
  Cpu,
  Layers,
  Network,
  Lock,
  Cloud,
  Terminal,
  BarChartIcon as ChartBar,
  Briefcase,
} from "lucide-react"

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    {
      category: "Programming Languages",
      icon: <Terminal className="h-6 w-6" />,
      color: "green",
      skills: [
        { name: "Python (Advanced)", level: 90 },
        { name: "C++", level: 75 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "PHP", level: 70 },
      ],
    },
    {
      category: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      color: "purple",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Redux", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "blue",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6" />,
      color: "cyan",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "SQL", level: 90 },
        { name: "PL/SQL", level: 75 },
        { name: "Data Modelling", level: 80 },
      ],
    },
    {
      category: "Data Analytics & Visualization",
      icon: <ChartBar className="h-6 w-6" />,
      color: "amber",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 80 },
        { name: "Matplotlib", level: 75 },
        { name: "Seaborn", level: 75 },
        { name: "Plotly", level: 70 },
        { name: "Tableau", level: 75 },
        { name: "Power BI", level: 70 },
        { name: "Advanced Excel", level: 80 },
      ],
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="h-6 w-6" />,
      color: "indigo",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Docker (Basic)", level: 65 },
        { name: "AWS Cloud Foundation", level: 75 },
        { name: "AWS Data Engineering", level: 70 },
      ],
    },
    {
      category: "AI/ML & Data Science",
      icon: <Cpu className="h-6 w-6" />,
      color: "red",
      skills: [
        { name: "Scikit-learn", level: 80 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Supervised Learning", level: 70 },
        { name: "Model Evaluation Metrics", level: 75 },
        { name: "A/B Testing", level: 70 },
      ],
    },
    {
      category: "Project Management",
      icon: <Briefcase className="h-6 w-6" />,
      color: "yellow",
      skills: [
        { name: "Agile/Scrum Methodologies", level: 85 },
        { name: "Jira (Advanced Workflows)", level: 80 },
        { name: "Confluence", level: 75 },
        { name: "Slack", level: 90 },
        { name: "Project Boards", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Section decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-cyan-500/20 rounded-lg opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border border-purple-500/20 rounded-lg opacity-30"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-cyan-500/50"></div>
            <p className="text-cyan-400 font-mono text-sm tracking-wider">EXPERTISE</p>
            <div className="h-px w-8 bg-cyan-500/50"></div>
          </div>

          <h2 className="text-3xl font-bold mb-2 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Tech Arsenal
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400">{">"}</span> Holographic skill matrix displaying expertise levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="relative group"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative rounded-lg border border-cyan-500/30 bg-black/50 backdrop-blur-sm overflow-hidden h-full">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-black/10"></div>

                {/* Tech grid background */}
                <div className="absolute inset-0 tech-grid opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                <div className="relative p-6 z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
                      <div className="text-cyan-400">{category.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + skillIndex * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group/skill"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className={`text-xs text-${category.color}-400 group-hover/skill:text-${category.color}-300 transition-colors`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-900 rounded-full overflow-hidden relative">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.6 + index * 0.1 + skillIndex * 0.1 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Connecting lines animation */}
                <div className="absolute inset-0 circuit-connect opacity-20 pointer-events-none"></div>

                {/* Data flow lines */}
                <div className="absolute inset-x-0 top-1/3 h-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="data-flow"></div>
                </div>
                <div className="absolute inset-x-0 bottom-1/3 h-1 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="data-flow" style={{ animationDelay: "1s" }}></div>
                </div>

                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 border border-cyan-500/0 rounded-lg transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {[
            { name: "Team Collaboration", icon: <Network className="h-4 w-4" /> },
            { name: "Communication", icon: <Globe className="h-4 w-4" /> },
            { name: "Problem-Solving", icon: <Cpu className="h-4 w-4" /> },
            { name: "Ownership", icon: <Lock className="h-4 w-4" /> },
            { name: "Adaptability", icon: <Layers className="h-4 w-4" /> },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)",
              }}
              className="px-3 py-2 rounded-md bg-black/50 border border-cyan-500/30 text-gray-300 flex items-center gap-2 group hover:bg-cyan-950/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{skill.icon}</span>
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
