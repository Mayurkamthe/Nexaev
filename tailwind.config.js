/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'Space Mono'", "monospace"],
      },
      colors: {
        bw: {
          bg:      '#0A0A0A',
          card:    '#111111',
          border:  '#222222',
          muted:   '#666666',
          subtle:  '#333333',
          white:   '#FFFFFF',
          offwhite:'#E8E8E8',
          accent:  '#CCCCCC',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)',
        'card-gradient': 'linear-gradient(145deg, #111111, #181818)',
        'glow-white':    'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, transparent 70%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { textShadow: '0 0 10px rgba(255,255,255,0.4)' },
          to:   { textShadow: '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.3)' },
        }
      }
    },
  },
  plugins: [],
}
