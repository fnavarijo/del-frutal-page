export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Del Frutal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Del Frutal website',
      },
      { hid: 'og:title', property: 'og:title', content: 'Del Frutal' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Del Frutal website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/favicon.ico',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Del Frutal',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Del Frutal website',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/favicon.ico',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css', 'hooper/dist/hooper.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/validate.ts' },
    { src: '~/plugins/sanitize.ts' },
    { src: '~/plugins/emailInit.ts' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/recaptcha',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
  recaptcha: {
    hideBadge: false,
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    version: 3,
    size: 'compact',
  },
  privateRuntimeConfig: {
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    mandrillApiKey: process.env.MANDRILL_API_KEY,
  },
  // publicRuntimeConfig: {
  //   mandrillApiKey: process.env.MANDRILL_API_KEY,
  // },
};
