/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-y': 'bounceY 2s infinite ease-in',
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)', easing: 'ease-in' },
          '50%': { transform: 'translateY(-10px)' ,easing: 'ease-in'},
        },
      },

      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // logobtbcolor: "#54d190"
        logobtbcolor: "#3a8c6a"
      },
    },
  },
  plugins: [],
};


// module.exports = {
//   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       animation: {
//         marquee: 'marquee 30s linear infinite',
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(100%)' },
//           '50%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(100%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
