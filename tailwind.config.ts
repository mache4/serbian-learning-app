import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-main": "linear-gradient(to bottom, #f5f5f5, #e0e0e0)"
      },
      colors: {
        primary: "#0074e4",
        secondary: "#ff6600",
        accent: "#66cc33",
        background: "#f5f5f5",
        text: "#333333",
        white: "#ffffff",
        black: "#000000"
      }
    },
  },
  plugins: [],
}
export default config
