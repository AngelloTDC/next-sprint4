import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#38b2ac',
        },
        blue: {
          600: '#3182ce',
        },
        cyan: {
          400: '#00bcd4',
        },
      },
    },
  },
  plugins: [],
};

export default config;
