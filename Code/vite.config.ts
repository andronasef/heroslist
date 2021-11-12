import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), svelte(),
  VitePWA(
    {
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      // base: "./",
      manifest: {
        lang: "ar",
        // start_url: "/",
        name: "HerosList",
        short_name: "HerosList",
        icons: [{ "src": "/favicon.svg", "sizes": "any" }],
        theme_color: "#ff1d5d",
      }
    })],
  base: "./"
})
