/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small devices (portrait phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops/desktops)
        xl: "1280px", // Extra large devices (large screens)
      },
    },
  },
  plugins: [],
};
