"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    text?: string
    tags: string[]
    links: {
      demo?: string
      github?: string
    }
    icon?: React.ReactNode
    date?: string
    details?: string[]
    image?: string
  }
  index: number
  isInView: boolean
}

export function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="relative group"
      whileHover={{ scale: 1.02 }}
    >
      <Card className="border-cyan-500/30 bg-black/50 backdrop-blur-sm overflow-hidden h-full relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>

        {/* Tech grid background */}
        <div className="absolute inset-0 tech-grid opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        <CardContent className="p-6 relative z-10">
          {/* Project header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {project.icon && (
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-cyan-900/30 flex items-center justify-center border border-cyan-500/30">
                  <div className="text-cyan-400">{project.icon}</div>
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                {project.date && <p className="text-xs text-gray-400 mt-1 font-mono">{project.date}</p>}
              </div>
            </div>

            {/* Project image if available */}
            {project.image && (
              <div className="w-16 h-16 rounded-md overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Project description */}
          <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

          {/* Project tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-cyan-950/30 border border-cyan-500/30 text-cyan-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project details (expandable) */}
          {project.details && (
            <div className="mt-4">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
              >
                {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {expanded ? "Hide details" : "Show details"}
              </button>

              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pl-4 border-l border-cyan-500/30 space-y-2 mb-4"
                >
                  {project.details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-400">
                      • {detail}
                    </p>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {/* Project links */}
          <div className="flex gap-3 mt-4">
            {project.links.github && (
              <Button
                variant="ghost"
                size="sm"
                className="border border-purple-500/30 text-purple-400 hover:bg-purple-950/30 hover:text-purple-300 group/btn"
                asChild
              >
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-1.5">
                    GitHub
                    <Github className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Button>
            )}
          </div>
        </CardContent>

        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 border border-cyan-500/0 rounded-lg transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-glow-sm"></div>
      </Card>
    </motion.div>
  )
}
