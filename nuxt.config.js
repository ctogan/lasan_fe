export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lasan_frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Mate&display=swap' },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.6.0.min.js",
        type: "text/javascript",
        crossorigin: "anonymous"
      },
      { 
        src: '/js/app.js', 
        type: 'text/javascript' ,
        async: true,
      },
    ],
  },
  
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/css/style.css', lang: 'css' },
    { src: '~/assets/css/app.css', lang: 'css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/services.js',
    '~/plugins/interceptor.js',
    // '~/plugins/axios.js',
     '~/plugins/Api.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth-next'
  ],
  router: {
    //middleware: ['auth']
  },
  auth: {
    localStorage: false,
    strategies: {
      google : {
        clientId:'466171963780-if78nhnamd4if7uadurdiijp7v2spcoh.apps.googleusercontent.com',
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: 'http://127.0.0.1:3001/api/auth/google', 
          userInfo: 'http://127.0.0.1:3001/api/user/profile',
          tokenRequired : true
        },
        token: {
          property: 'accessToken',
          type: 'Bearer',
          maxAge: 86400
        },
        userInfo : {
          property : false,
          autoFetch : true
        },
        scope: ['openid', 'profile', 'email'],
        grantType: 'authorization_code',
        accessType : 'offline'
      },
    }
  },
  axios: {
    //proxy: true,
    baseURL: 'http://127.0.0.1:3001',
   // prefix: '/api/'
  },
  
  publicRuntimeConfig: {
    // axios: {
    //   browserBaseURL: process.env.BROWSER_BASE_URL
    // }
  },
  devtools: true,

  privateRuntimeConfig: {
    // axios: {
    //   baseURL: process.env.BASE_URL
    // }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  moment : {
    defaultLocale: 'en',
    locales: ['id'],
    timezone: true
  }
}
