/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cc1: "#b50912",
        cc2: "#4287f5",
        cc3: "#0ca62d",
        cc4: "#f005a5",
        cc5: "#e2f50f",
        cc6: "#6d349e", // Define your custom color here
      },
    },
  },
  plugins: [],
};
