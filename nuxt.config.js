module.exports = {
  head: {
    title: '강남엄마',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '이제 찾아다니지 마세요. ‘강남엄마’ 하세요.' }
    ]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  axios: {
    // 모듈 설정
    baseURL: 'https://demo7094602.mockable.io/'
  },
  css: [
    '~/assets/font/font.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  styleResources: {
    scss: [
        '~/assets/scss/style.scss'
    ]
  },
  plugins: [{ src: '~/plugins/vueSlickCarousel.js' }],
  build: {
    transpile: ['vue-slick-carousel'],
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}