import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      // You can define other font families here as well
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark-green': '#283618',
      'forest-green': '#606C38',
      'green': '#CCD5AE',
      'light-green': '#E9EDC9',
      'clay': '#BC6C25',
      'sand': '#DDA15E',
      'cream': '#FAEDCD',
      'light-cream': '#FEFAE0',
      'white': '#FFFFFF',
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
export default config;
