import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      background: '#FAFBFC',
      primary: {
        main: '#2500ff',
        light: '#c9ebfc',
        dark: '#0095ff',
      },
      secondary: {
        main: '#8950FC',
        light: '#f3e8ff',
        dark: '#884DFF',
      },
      success: {
        main: '#3cd856',
        light: '#dcfce7',
        dark: '#00e096',
      },
      warning: {
        main: '#ffaa21',
        light: '#fff4de',
        dark: '##ff8f0d',
      },
      error: {
        main: '##ef4444',
        light: '#ffe2e5',
        dark: '#dc3545',
      },
      common: {
        white: '#FFF',
        black: '#000',
      },
      text: {
        primary: '#151D48',
        secondary: '#9699ac',
        disabled: '#737791',
      },
      divider: '#edf2f6',
    },
  },
  plugins: [],
}
export default config
