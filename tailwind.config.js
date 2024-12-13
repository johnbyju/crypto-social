/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         // Include the entry HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JavaScript/TypeScript files in `src` folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example: Add a custom primary color
        secondary: "#9333EA", // Example: Add a custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example: Set a custom font family
      },
    },
  },
  plugins: [
   
  ],
};
