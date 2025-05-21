import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cyberpunk theme colors
        cyan: {
          DEFAULT: "#00FFFF",
          50: "#E6FFFF",
          100: "#B3FFFF",
          200: "#80FFFF",
          300: "#4DFFFF",
          400: "#1AFFFF",
          500: "#00FFFF", // Primary cyan
          600: "#00CCCC",
          700: "#009999",
          800: "#006666",
          900: "#003333",
          950: "#001A1A",
        },
        purple: {
          DEFAULT: "#9400D3",
          50: "#F4E6FA",
          100: "#E9CCF5",
          200: "#D399EB",
          300: "#BE66E0",
          400: "#A933D6",
          500: "#9400D3", // Primary purple
          600: "#7600A9",
          700: "#57007F",
          800: "#380054",
          900: "#1C002A",
          950: "#0E0015",
        },
        green: {
          DEFAULT: "#00FF00",
          50: "#E6FFE6",
          100: "#B3FFB3",
          200: "#80FF80",
          300: "#4DFF4D",
          400: "#1AFF1A",
          500: "#00FF00", // Primary green
          600: "#00CC00",
          700: "#009900",
          800: "#006600",
          900: "#003300",
          950: "#001A00",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
