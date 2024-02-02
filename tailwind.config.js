/** @type {import('tailwindcss').Config} */
import { buttonSize, theme } from './src/constant';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      width:{
          "large": `${buttonSize.large}rem`,
          "medium": `${buttonSize.medium}rem`,
          "small": `${buttonSize.small}rem`
      },
      colors:{
        "colorScheme":{
          "light":{
            "primary": theme.light.background.primary,
            "secondary": theme.light.background.secondary,
            "green":theme.light.background.green,
            "orange": theme.light.background.orange,
            "charcoal": theme.light.background.charcoal,
            "greeno": theme.light.background.greenLite,
            "yellow": theme.light.background.yellow,
            "nightBlue" : theme.light.text.blueTheme
          },
        },
        "textScheme":{
          "light":{
            "primary":theme.light.text.primary,
            "secondary": theme.light.text.secondary
          }
        },
      }
    },
  },
  plugins: [],
}

