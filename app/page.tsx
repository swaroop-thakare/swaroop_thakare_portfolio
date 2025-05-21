import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { NavMenu } from "@/components/nav-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { CustomLoader } from "@/components/custom-loader"
import { CustomCursor } from "@/components/custom-cursor"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { FloatingChatbotButton } from "@/components/floating-chatbot-button"

export default function Home() {
  return (
    <>
      {/* Video loader */}
      <CustomLoader />

      <main className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Grid Background */}
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* Navigation */}
        <NavMenu />

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </div>

        {/* Footer */}
        <footer className="border-t border-cyan-500/30 mt-20 py-6 text-center text-cyan-500">
          <div className="container mx-auto">
            <div className="flex justify-center gap-6 mb-4">
              <a
                href="https://github.com/swaroop-thakare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/swaroop-thakare-136484259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:swaroopthakare@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+919561060731" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="glitch-text text-sm">
              <span className="text-purple-400">System Status:</span> Online •
              <span className="text-green-400 ml-2">Last Updated:</span> {new Date().toLocaleDateString()}
            </p>
            <p className="mt-2 text-xs opacity-70">
              © {new Date().getFullYear()} Swaroop Thakare • All Systems Operational
            </p>
          </div>
        </footer>

        {/* Floating Chatbot Button */}
        <FloatingChatbotButton />
      </main>
    </>
  )
}
