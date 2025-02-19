import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
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
        green: '#4CAF50',    // Example green, replace with your exact shade
        yellow: '#FFEB3B',   // Example yellow, replace with your exact shade
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        highway: ["Highway Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
