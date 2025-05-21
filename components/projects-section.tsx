"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Code, Accessibility, Brain, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Accessible Public Transportation System",
      description:
        "Designed and deployed a full-stack, accessibility-first public transportation website compliant with WCAG 2.1 Level AA, enhancing digital inclusion for users with visual, mobility, and cognitive impairments.",
      text: "Accessible Transportation System",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL", "WCAG 2.1"],
      links: {
        github: "https://github.com/swaroop-thakare/accessible-transportation",
      },
      icon: <Accessibility className="h-5 w-5" />,
      date: "08/2023 - 12/2024",
      details: [
        "Developed features like high-contrast mode, screen reader support, and a real-time interactive route planner",
        "Achieved a 40% improvement in route planning efficiency and increased platform usability for diverse user groups",
        "Led the integration of dynamic transit data APIs and optimized performance for low-bandwidth accessibility",
      ],
    },
    {
      title: "Freelancer Management System (FMS)",
      description:
        "Engineered a scalable platform to manage freelancer profiles, task allocation, payments, and performance tracking with role-based access control and secure authentication.",
      text: "Freelancer Management System",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "MERN"],
      links: {
        github: "https://github.com/swaroop-thakare/freelancer-management",
      },
      icon: <Code className="h-5 w-5" />,
      date: "2023 - 2024",
      details: [
        "Implemented role-based access control, secure authentication, and dynamic dashboards for clients and freelancers",
        "Utilized Agile methodology with Jira for sprint planning and GitHub for CI/CD workflows",
        "Enhanced task tracking efficiency and streamlined remote collaboration for global teams",
      ],
    },
    {
      title: "College Connect – AI-Enhanced Academic Platform",
      description:
        "Designed and implemented an all-in-one academic management platform aimed at streamlining student-faculty interaction with AI-powered assistance and real-time communication.",
      text: "College Connect Platform",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSockets", "NextAuth.js", "OpenAI API"],
      links: {
        github: "https://github.com/swaroop-thakare/college-connect",
      },
      icon: <Globe className="h-5 w-5" />,
      details: [
        "Developed modules for course registration, real-time messaging, event scheduling, and academic resource sharing",
        "Integrated secure authentication using NextAuth.js and JWT, along with real-time communication via WebSockets",
        "Planned integration of OpenAI API to offer personalized academic assistance and smart planning for students",
        "Designed roadmap for reinforcement learning integration to enhance adaptive learning pathways",
      ],
    },
    {
      title: "Machine Learning–Driven News Veracity Detection System",
      description:
        "Developed an ML-powered platform to detect and classify fake news using real-world datasets, NLP techniques, and optimized classification algorithms.",
      text: "ML News Verification System",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "NLP", "TF-IDF", "Matplotlib"],
      links: {
        github: "https://github.com/swaroop-thakare/fake-news-detection",
      },
      icon: <Brain className="h-5 w-5" />,
      details: [
        "Applied NLP techniques including tokenization, stop word removal, and stemming, followed by TF-IDF vectorization",
        "Trained and optimized multiple classifiers, with Logistic Regression achieving the best results",
        "Built a scalable and interpretable pipeline that supports the fight against misinformation",
        "Evaluated performance using accuracy, precision, recall, and confusion matrix, ensuring robustness",
      ],
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/10 rounded-lg opacity-30 transform rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/10 rounded-lg opacity-30 transform -rotate-12"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-cyan-500/50"></div>
            <p className="text-cyan-400 font-mono text-sm tracking-wider">PROJECTS</p>
            <div className="h-px w-8 bg-cyan-500/50"></div>
          </div>

          <h2 className="text-3xl font-bold mb-2 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Deployed Programs
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            <span className="text-cyan-400">{">"}</span> Featured projects by Computer Engineering Student
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 hover:text-cyan-300 group cyberpunk-button"
            asChild
          >
            <a href="https://github.com/swaroop-thakare?tab=repositories" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
