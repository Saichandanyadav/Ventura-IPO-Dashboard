/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        muted: 'hsl(var(--muted))',
      },
    },
  },
  plugins: [],
}
