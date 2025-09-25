/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./assets/css/**/*.css",
  ],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
}

  safelist: ["bg-background", "text-foreground"],
  plugins: [],
};
