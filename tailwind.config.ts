import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Cool, control-room neutral ramp — "ink".
        ink: {
          950: "#090d12",
          900: "#0d131a",
          850: "#121a23",
          800: "#18222d",
          750: "#1e2a37",
          700: "#273545",
          600: "#3a4c5f",
          500: "#5a6f83",
          400: "#8698a9",
          300: "#a9b8c6",
          200: "#c9d4de",
          100: "#e7edf2",
          50: "#f4f7f9",
        },
        // Railway signal aspects — a genuine motif for realtime rail / transit work.
        signal: {
          amber: "#e7a33e", // caution / wayfinding / primary interaction
          green: "#43c08d", // clear / technical accent / positive
          red: "#e15656", // stop / challenge markers
        },
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        display: [
          "var(--font-sora)",
          "var(--font-plex-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-plex-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      letterSpacing: {
        label: "0.16em",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0.15" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-in",
        blink: "blink 1.6s steps(1, end) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
