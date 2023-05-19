/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    backgroundImage: {
      'hero-pattern': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fcriticalhits.com.br%2Fgames%2Fthe-last-of-us-2-belissimas-artes-conceituais-foram-divulgadas%2F&psig=AOvVaw0f0JYntU0giVt_8VATdy9i&ust=1683930697589000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIi-y-io7v4CFQAAAAAdAAAAABAE')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [],
}