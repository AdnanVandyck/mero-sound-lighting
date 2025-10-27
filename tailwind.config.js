
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'mero-black': '#0D0D0D',
//         'mero-white': '#F5F5F5',
//         'mero-gray': '#808080',  // Mid-gray for subtle accents
//       },
//       fontFamily: {
//         'display': ['Inter', 'sans-serif'],
//         'body': ['Inter', 'sans-serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.8s ease-out',
//         'slide-up': 'slideUp 0.6s ease-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//         slideUp: {
//           '0%': { transform: 'translateY(20px)', opacity: '0' },
//           '100%': { transform: 'translateY(0)', opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }


// tailwind.config.js
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'mero-black': '#0a0a0a',
        'mero-white': '#ffffff',
        'mero-gold': '#d4af37',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // move one full copy width
        },
      },
      animation: {
        marquee: 'marquee 24s linear infinite', // adjust speed here
      },
    },
  },
  plugins: [],
}
