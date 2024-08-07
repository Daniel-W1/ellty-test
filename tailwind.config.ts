import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      colors: {
        'button-primary': '#FFCE22',
        'button-secondary': '#FFD84D',
        'border-primary': '#EEEEEE',
        'border-secondary': '#CDCDCD',
        'primary': '#1F2128',
      }
    },
  },
  plugins: [],
};
export default config;
