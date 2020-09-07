export const state = () => ({
  isLogin: false
})

export const mutations = {
  setLogin(state, payload) {
    state.isLogin = payload
  }
}

export const actions = {
  async login({commit}) {
    commit('setLogin', true)
  }
}