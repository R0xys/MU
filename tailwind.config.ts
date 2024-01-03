import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pink-paws' : "url('../../public/images/pink-paws.svg')",
      },
      fontFamily: {
        'lilita': ['var(--var-lilita)'],
      },
      keyframes: {
        'slide': {
          '0%': { marginTop: '0px' },
          '100%': { marginTop: '20%' },
        }, 
        'move': {
          '0%': { transform: 'translate(0px, 0%) rotate(12deg)',},
          '100%': { transform: 'translate(100px, -75%) rotate(12deg)' },
        }
      },
      animation: {
        'slide': '0.5s slide 2s ease-in-out both',
        'move': 'move 30s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
