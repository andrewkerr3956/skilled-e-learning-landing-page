/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        blue: '#666CA3',
        navy: '#13183F',
        gray: '#83869A',
        'hot-pink': '#F74780',
        pink: '#FFA7C3'
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)',
        'blue-gradient': 'linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)'
      },
      padding: {
        'btn': '14px 32px'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        lg: '135px',
        md: '45px',
      }
    },
    borderRadius: {
      'btn': '28px'
    }
  },
  plugins: [],
}
