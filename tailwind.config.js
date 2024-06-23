/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "32px",
      },
      colors: {
        background: "#FEFAF5",
        foreground: "#333333",
        primary: {
          DEFAULT: "#F27F08",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F4F4F5",
          foreground: "#333333",
        }
      },
      fontSize: {
        md: "16px",
      },
      fontFamily: {
        hregular: ["HarmonyOS_SansSC_Regular"],
        hbold: ["HarmonyOS_SansSC_Bold"],
        hblack: ["HarmonyOS_SansSC_Black"],
      }
    },
  },
  plugins: [],
}

