/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F9D88", // Teal color from screenshots
          dark: "#00796B",
          light: "#E0F2F1",
        },
        secondary: {
          DEFAULT: "#FFAB40", // Orange/Amber for streaks/accents
          light: "#FFF3E0",
        },
        tertiary: {
          DEFAULT: "#6C63FF", // Purple for Desk/Community
          light: "#E0DFFF",
        },
        dark: {
          DEFAULT: "#1A202C", // Dark text
          muted: "#718096",
        },
        light: {
          DEFAULT: "#FFFFFF",
          bg: "#F7FAFC", // Light gray background
        }
      },
      fontFamily: {
        // Assuming system fonts for now, can add custom fonts later if needed
      }
    },
  },
  plugins: [],
}

