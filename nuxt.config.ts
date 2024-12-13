// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url'
import { config } from 'dotenv';
config();

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      gtagKey: process.env.GTAG_KEY || ''
    }
  },
  css: ['@/assets/scss/main.scss'],
  alias: {
    '@': fileURLToPath(new URL('.', import.meta.url)),
  },
  modules: ['@pinia/nuxt', 'nuxt-lazy-load', 'nuxt-calendly'],
  lazyLoad: {
    images: true,
    videos: true,
    audios: true,
    iframes: true,
    native: false,
    directiveOnly: false,    
    defaultImage: '/placeholder.svg',
    // To remove class set value to false
    loadingClass: 'isLoading',
    loadedClass: 'isLoaded',
    appendClass: 'lazyLoad',
    
    observerConfig: {
      // See IntersectionObserver documentation
    }
  },
  calendly: {
    isEnabled: true,
    loadWidgetCSS: true,
    loadWidgetCloseIconSvg: true
  },
  plugins: [
    '~/plugins/vue-scrollto.js',
    '~/plugins/lazy-background.js',
    '~/plugins/google-analytics.js'
  ],
  app: {
    head: {
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
        // { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }
})