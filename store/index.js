export const state = () => ({
  isLogin: null
})

export const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload
  }
}

export const actions = {
  async login({commit}) {
    const data = await this.$axios.$get('/academies/1/reviews/')
    commit('setLogin', data)
  }
}