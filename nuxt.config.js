import colors from 'vuetify/es5/util/colors';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - sqi-framework-frontend_v2',
    title: 'sqi-framework-frontend_v2',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugin/layout.setting.js', '~/plugin/api.interceptor.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'accessToken',
          global: true,
          maxAge: 1800, // 액세스 토큰 만료 시간 (초 단위)
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30, // 리프레시 토큰 만료 시간 (초 단위)
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: 'http://localhost:8086/api/v1/cert/login', method: 'post' },
          // refresh: { url: '/api/auth/refresh', method: 'post' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          user: false,
        },
      },
    },
  },
  // router: {
  //   middleware: ['auth'],
  // },
  server: {
    port: 3001,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    browserBaseURL: process.env.NODE_ENV === 'production' ? 'https://api.nodebird.com/api' : 'http://localhost:3000',
    baseURL: process.env.NODE_ENV === 'production' ? 'https://api.nodebird.com/api' : 'http://localhost:3000',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
