import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F26426',
        secondary: '#FFD6C6',
      },
      fontFamily: {
        tomato: 'var(--font-tomato)',
      },
    },
  },
  plugins: [],
};
export default config;
