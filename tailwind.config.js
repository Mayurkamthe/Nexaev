/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      colors: {
        neon: {
          green: '#39FF14',
          lime: '#AAFF00',
        },
        ev: {
          dark: '#080C10',
          card: '#0D1117',
          border: '#1C2333',
          accent: '#00E5FF',
          orange: '#FF6B00',
          muted: '#8892A4',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #080C10 0%, #0D1F2D 50%, #091A14 100%)',
        'card-gradient': 'linear-gradient(145deg, #0D1117, #111827)',
        'glow-green': 'radial-gradient(ellipse at center, rgba(57,255,20,0.15) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(ellipse at center, rgba(0,229,255,0.12) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(40px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #39FF14, 0 0 20px #39FF14' },
          to: { textShadow: '0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14' },
        }
      }
    },
  },
  plugins: [],
}
