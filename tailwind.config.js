/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Your custom background variable
        foreground: "var(--foreground)", // Your custom foreground variable
        // Extend colors for light and dark mode
        light: {
          background: '#ffffff',
          foreground: '#000000',
        },
        dark: {
          background: '#121212',
          foreground: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};