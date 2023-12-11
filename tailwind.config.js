/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "wide": "1440px"
      },
      fontFamily: {
        redressed: ['Redressed', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        "primary": "#0B0B0D",
        "secondary": "#8CFFD8",
        "dutch-white": "#ECDBBA",
        "rose-red" : "#C84B31",
      },
      backgroundImage: {
        'hero': "url('assets/images/Hero_bg.png')",
        'hero2': "url('assets/images/Hero_bg2.jpg')",
        'hero3': "url('assets/images/Hero_bg3.jpg')",
        'hero4': "url('assets/images/Hero_bg4.jpg')",
        'hero5': "url('assets/images/Hero_bg5.jpg')",
        'hero6': "url('assets/images/Hero_bg6.png')",
        'hero7': "url('assets/images/Hero_bg7.jpg')",
        'hero8': "url('assets/images/Hero_bg8.jpg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
}