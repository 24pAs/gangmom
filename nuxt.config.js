module.exports = {
  head: {
    title: '강남엄마'
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
    { src: '~/assets/scss/style.scss', lang: 'scss' }
  ],
  build: {
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}