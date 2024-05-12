/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary" : "#0B0C10",
        "secondry" : "#FFFFFF",
        "tertiary" : "#C5C6C7",
        "quaternary" : "#66FCF1",
        "quinary" : "#45A29E"
      }
    },
  },
  plugins: [],
}
