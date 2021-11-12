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
      base: './',
      manifest: {
        name: "HerosList",
        short_name: "HerosList",
        dir: "rtl",
        lang: "ar",
        background_color: "#ffffff",
        display: "fullscreen",
        theme_color: "#ff1d5d",
        icons: [
          { src: "favicon.svg", sizes: "any", }, {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'favicon.svg',
            sizes: 'any',
            type: 'image/svg',
            purpose: 'any maskable',
          }],
      }
    })],
  base: "./"
})
