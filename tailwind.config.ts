import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        orange: {
          DEFAULT: "#F26522",
          light: "#FFF0E8",
          hover: "#D9581A",
        },
        // Neutrals
        dark: "#1A1A1A",
        mid: "#555555",
        muted: "#888888",
        light: "#F8F7F5",
        line: "#E0DDD8",

        // Research themes
        migration: {
          DEFAULT: "#2563EB",
          light: "#EFF6FF",
          mid: "#BFDBFE",
        },
        youth: {
          DEFAULT: "#7C3AED",
          light: "#F5F3FF",
          mid: "#DDD6FE",
        },
        economy: {
          DEFAULT: "#059669",
          light: "#ECFDF5",
          mid: "#A7F3D0",
        },
        storytelling: {
          DEFAULT: "#D97706",
          light: "#FFFBEB",
          mid: "#FDE68A",
        },
        violence: {
          DEFAULT: "#DC2626",
          light: "#FEF2F2",
          mid: "#FECACA",
        },
      },

      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.69rem", { lineHeight: "1.4" }],
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.05rem", { lineHeight: "1.75" }],
        xl: ["1.25rem", { lineHeight: "1.4" }],
        "2xl": ["1.5rem", { lineHeight: "1.3" }],
        "3xl": ["1.875rem", { lineHeight: "1.25" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.15" }],
        "6xl": ["3.8rem", { lineHeight: "1.1" }],
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      maxWidth: {
        "8xl": "88rem",
        content: "1180px",
        hero: "1280px",
      },

      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        "fade-up-delayed": "fadeUp 0.8s 0.2s ease both",
        "draw-line": "drawLine 2.5s ease forwards",
      },

      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          to: { strokeDashoffset: "0" },
        },
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },

      backdropBlur: {
        nav: "8px",
      },

      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.06)",
        "card-hover": "0 14px 40px rgba(0,0,0,0.10)",
        modal: "0 30px 80px rgba(0,0,0,0.18)",
        orange: "0 6px 20px rgba(242,101,34,0.35)",
        "orange-sm": "0 4px 14px rgba(242,101,34,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
