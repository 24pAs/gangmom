export const state = () => ({
  allCount: 0,
  academyStatistics: {
    star_avg: 0,
    star_ratio: {
      star: 0,
      ratio: 0,
    },
    recommendedRate: 0
  },
  academyReviewList: []
})

export const mutations = {
  updateAllCount(state, data) {
    state.allCount = data
  },
  updateAcademyStatistics(state, data) {
    state.academyStatistics = { ...state.academyStatistics , ...data }
  },
  updateAcademyReviewList(state, data) {
    state.academyReviewList = data
  }
}

export const actions = {
  async getAcademyStatistics({commit}, id) {
    try {
      const { message, data } = await this.$axios.$get(`/academies/${id}/reviews/statistics`)
      if (message === "SUCCESS") {
        const maxRatioStar = Object.keys(data.star_rates).reduce((a, b) => data.star_rates[a] > data.star_rates[b] ? a : b)
        const allCount = Object.values(data.star_rates).reduce((acc, current) => acc + current)
        const payloadData = {
          star_avg: data.star_avg,
          star_ratio: {
            star: maxRatioStar,
            ratio: parseInt((data.star_rates[maxRatioStar] / allCount) * 100)
          },
          recommendedRate: data.recommended_rate
        }
        commit('updateAcademyStatistics', payloadData)
      } else {
        alert('데이터를 가져오는데 실패했습니다.')
      }
    } catch (error) {
      throw error
    }
  },
  async getAcademyReviewList({ commit }, id) {
    try {
      const { message, data } = await this.$axios.$get(`/academies/${id}/reviews/`)      
      if (message === "SUCCESS") { 
        commit('updateAcademyReviewList', data.content)
        commit('updateAllCount', data.totalElements)
      } else {
        alert('데이터를 가져오는데 실패했습니다.')
      }
    } catch (error) {
      throw error
    }
  }
}