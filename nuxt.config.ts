
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  app: {
    head: {
      title: 'SageX', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.prod.website-files.com/64140d099741e4d350b05b9e/642423bb75222a6d6657ae74_X.svg' },
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})

