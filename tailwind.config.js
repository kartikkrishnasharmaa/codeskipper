// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'border-glow': 'borderGlow 0.8s ease-in-out forwards',
      },
      keyframes: {
        borderGlow: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(-90deg) scaleX(1.34) scaleY(0.77)' },
        },
      },
    },
  },
  plugins: [],
};
