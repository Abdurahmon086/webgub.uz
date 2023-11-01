/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(96deg, #3023B2 1%, #7F56D9 100.05%)",
      },
      colors: {
        "white-800": "rgba(255, 255, 255, 0.80)",
        "green-500": "rgb(75,229,202)",
      },
    },
    container: {
      padding: {
        DEFAULT: "0 20px",
        sm: "0 10px",
        lg: "0 15px",
      },
    },
  },
  plugins: [],
};
