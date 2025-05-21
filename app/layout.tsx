import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Swaroop Thakare | Portfolio",
  description: "Computer Engineer specializing in Full-Stack Development, Cloud Computing, and Database Management",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* SVG Filters for glitch effects */}
          <svg style={{ position: "absolute", width: 0, height: 0 }}>
            <defs>
              <filter id="redShift">
                <feColorMatrix
                  type="matrix"
                  values="1 0 0 0 0
                          0 0 0 0 0
                          0 0 0 0 0
                          0 0 0 1 0"
                />
              </filter>
              <filter id="greenShift">
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0
                          0 1 0 0 0
                          0 0 0 0 0
                          0 0 0 1 0"
                />
              </filter>
              <filter id="blueShift">
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0
                          0 0 0 0 0
                          0 0 1 0 0
                          0 0 0 1 0"
                />
              </filter>
            </defs>
          </svg>

          {/* Enhanced background with subtle grid */}
          <div className="fixed inset-0 bg-black bg-opacity-95 z-[-2]"></div>
          <div className="fixed inset-0 bg-grid-pattern opacity-5 z-[-1] pointer-events-none"></div>
          <div className="fixed inset-0 cyber-grid opacity-10 z-[-1] pointer-events-none"></div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
