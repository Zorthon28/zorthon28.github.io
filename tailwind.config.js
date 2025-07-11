/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // For Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // If you have a components folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Or if your main source is in 'src'
    // Ensure your CaseStudy.jsx file's path is included here
  ],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        // ADD THIS LINE for the fade-in animation:
        "fade-in": "fadeIn 0.7s ease-out forwards", // You can adjust duration (e.g., '0.7s') and timing ('ease-out'),
        "pulse-once": "pulse-once 1s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.2" },
          "50%": { transform: "translateY(-20px)", opacity: "0.4" },
        },
        // ADD THESE LINES for the fadeIn keyframes:
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideFadeInOut: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "10%": { opacity: "1", transform: "translateY(0)" },
          "90%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
        "pulse-once": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "1" }, // Slightly scale up and back
        },
      },
    },
  },
  plugins: [
    // ... your existing plugins
  ],
};
