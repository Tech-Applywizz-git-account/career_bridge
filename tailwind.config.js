/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-light': '#f0ffd1',
        'green-mid': '#eaf0dd',
        'green-accent': '#a9ed42',
        'dark': '#1d1f13',
        'dark-5': 'rgba(29,31,19,0.05)',
        'dark-8': 'rgba(29,31,19,0.08)',
        'off-white': '#f7f8f5',
        'border': '#eaf0dd',
        'text-main': '#1d1f13',
        'text-muted': 'rgba(29,31,19,0.6)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'display': ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'sm': '9px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
      },
      keyframes: {
        float1: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } },
        float2: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(12px)' } },
        bounce_custom: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(4px)' } },
        fadeUp: { 'from': { opacity: '0', transform: 'translateY(20px)' }, 'to': { opacity: '1', transform: 'translateY(0)' } },
        marqueeLeft: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeRight: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        scrollUp: { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(-50%)' } },
      },
      animation: {
        'float1': 'float1 6s ease-in-out infinite',
        'float2': 'float2 7s ease-in-out infinite',
        'bounce-custom': 'bounce_custom 2s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.8s ease both',
        'marqueeLeft': 'marqueeLeft 30s linear infinite',
        'marqueeRight': 'marqueeRight 30s linear infinite',
        'scrollUp': 'scrollUp 20s linear infinite',
      }
    },
  },
  plugins: [],
}
