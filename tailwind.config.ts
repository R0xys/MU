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
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-300px)' },
        }
      },
      animation: {
        'slide': '0.5s slide 2s ease-in-out both',
      }
    },
  },
  plugins: [],
}
export default config
