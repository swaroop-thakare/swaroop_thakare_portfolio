import { NextResponse } from "next/server"

const responses = {
  greeting: {
    response:
      "👋 Hello! I'm your virtual assistant. How can I help you today? You can ask me about my background, projects, skills, or anything else you'd like to know!",
  },
  "tell me about yourself": {
    response: `I'm Swaroop Thakare, a third-year Computer Engineering student from PCCOE, Pune. My interests lie at the intersection of technology, problem-solving, and product thinking. I've worked on several impactful projects including a Fake News Detection platform using Python and NLP, and a full-stack academic portal using Next.js and Node.js.
    I've also served as the Public Relations Head at ACM PCCOE, leading team collaborations, communications, and national-level event strategies. I enjoy learning new tools, managing product workflows, and delivering value through innovative software solutions.`,
  },
  "what are your skills": {
    response: `Here are some of my key skills:

    **Programming Languages:**
    - JavaScript/TypeScript
    - Python
    - HTML/CSS
    - SQL

    **Frameworks & Libraries:**
    - React.js
    - Next.js
    - Node.js
    - Express.js
    - TailwindCSS
    
    **Tools & Technologies:**
    - Git/GitHub
    - MongoDB
    - PostgreSQL
    - AWS
    - Docker
    
    **Other Skills:**
    - UI/UX Design
    - Data Analysis
    - Machine Learning
    - Project Management
    - Team Leadership`,
  },
  "show me your latest project": {
    response: `🔹 **Project Name**: College Connect – AI-Enhanced Academic Platform
    
    🔹 **Description**: A Next.js 14 based full-stack platform built to unify academic resources, course registration, and real-time communication for students and faculty.
    
    🔹 **Tech Stack**:
    - Frontend: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS
    - Backend: Next.js API Routes, PostgreSQL + MongoDB (hybrid architecture)
    - Real-time: WebSockets (Socket.io)
    - Authentication: NextAuth.js, JWT
    - AI: OpenAI API (GPT-4)
    
    🔹 **Features**:
    - Course registration and academic resource sharing
    - Real-time messaging between students and faculty
    - AI-powered academic assistance
    - Personalized learning pathways
    
    🔹 **GitHub**: [github.com/swaroop-thakare/college-connect](https://github.com/swaroop-thakare/college-connect)`,
  },
  "what projects have you worked on": {
    response: `I've worked on several projects, including:

    1. **College Connect – AI-Enhanced Academic Platform**
       - Next.js 14, React 18, TypeScript, Tailwind CSS, PostgreSQL + MongoDB
       - An all-in-one academic management platform with AI assistance
    
    2. **Machine Learning–Driven News Veracity Detection System**
       - Python, Pandas, NumPy, Scikit-learn, NLP
       - ML-powered platform to detect and classify fake news
    
    3. **Freelancer Management System**
       - MongoDB, Express.js, React.js, Node.js (MERN Stack)
       - Platform for managing freelancer profiles, tasks, and payments
    
    4. **Accessible Public Transportation System Website**
       - HTML, CSS, JavaScript, Node.js, MySQL
       - Accessibility-first public transportation website compliant with WCAG 2.1 Level AA
    
    You can ask me for more details about any specific project!`,
  },
  "what are your experiences": {
    response: `Here are some of my key experiences:

    **Public Relations Head at ACM PCCOE**
    - Led team collaborations and communications
    - Managed national-level event strategies
    - Coordinated with industry partners for technical workshops
    
    **Web Development Intern at TechSolutions**
    - Developed responsive web applications using React.js
    - Collaborated with UX designers to implement user-friendly interfaces
    - Optimized website performance and accessibility
    
    **Research Assistant - ML Project**
    - Worked on data preprocessing and feature engineering
    - Implemented and evaluated various ML algorithms
    - Presented findings at college research symposium`,
  },
  hi: {
    response:
      "👋 Hello! I'm your virtual assistant. How can I help you today? You can ask me about my background, projects, skills, or anything else you'd like to know!",
  },
  hello: {
    response:
      "👋 Hello! I'm your virtual assistant. How can I help you today? You can ask me about my background, projects, skills, or anything else you'd like to know!",
  },
  start: {
    response:
      "👋 Hello! I'm your virtual assistant. How can I help you today? You can ask me about my background, projects, skills, or anything else you'd like to know!",
  },
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const userMessage = body.message?.toLowerCase() || ""

    // Check for direct matches
    if (responses[userMessage]) {
      return NextResponse.json(responses[userMessage])
    }

    // Check for partial matches
    if (userMessage.includes("project")) {
      return NextResponse.json(responses["what projects have you worked on"])
    }

    if (userMessage.includes("skill")) {
      return NextResponse.json(responses["what are your skills"])
    }

    if (userMessage.includes("about you") || userMessage.includes("yourself")) {
      return NextResponse.json(responses["tell me about yourself"])
    }

    if (userMessage.includes("experience") || userMessage.includes("work")) {
      return NextResponse.json(responses["what are your experiences"])
    }

    // Default response
    return NextResponse.json({
      response:
        "🤔 I'm not sure how to respond to that. You can ask me about my background, projects, skills, or experiences!",
    })
  } catch (error) {
    console.error("Error processing chatbot request:", error)
    return NextResponse.json({ response: "Sorry, I encountered an error. Please try again later." }, { status: 500 })
  }
}
