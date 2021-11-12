import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [WindiCSS(), svelte(),
  VitePWA(
    {
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png', "pwa-512x512.png"],
      manifest: {
        dir: "rtl",
        lang: "ar",
        name: "HerosList",
        short_name: "HerosList",
        icons: [
          { src: "favicon.svg", sizes: "any", }, {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg',
            purpose: 'any maskable',
            // scope: "/",
            // start_url: "/",



          }],
        background_color: "#ffffff",
        display: "fullscreen",
        theme_color: "#ff1d5d",
      }
    })],
  base: "./"
})
