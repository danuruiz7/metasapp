/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        principal: '64px',
      },
      boxShadow: {
        out: '10px 10px 20px 0px rgba(163,177,198,0.7)',
        in: 'inset 2px 2px 5px 0px rgba(163,177,198,0.7)',
      },
    },
  },
  plugins: [],
};
