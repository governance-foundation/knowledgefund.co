/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2E62FF",
          "blue-glow": "rgba(46, 98, 255, 0.15)",
        },
        slate: {
          950: "#0e0e10",
          900: "#131315",
          800: "#1c1b1d",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      backgroundImage: {
        "technical-gradient":
          "radial-gradient(circle at top, rgba(46, 98, 255, 0.08) 0%, transparent 70%)",
        "card-gradient": "linear-gradient(to bottom right, rgba(255, 255, 255, 0.03), transparent)",
      },
      boxShadow: {
        "inner-glow": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
        "soft-blue": "0 0 40px -10px rgba(46, 98, 255, 0.2)",
      },
      borderColor: {
        "white-fade": "rgba(255, 255, 255, 0.05)",
        "white-border": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
