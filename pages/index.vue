<template>
  <div class="grid">
    <div class="grid-wide">
      <button v-if="!isLogin" type="button" style="position: absolute;right: 30px;top: 30px;font-size: 20px;text-decoration: underline;" @click="login">로그인</button>
      <section-title
        title="리뷰"
        :count="allCount"
      />
      <review-statistics />
      <review-list />
      <button-review-write />
      <button-all-view :text="`리뷰 ${allCount}개`" />
    </div>
  </div>
</template>

<script>
import ButtonReviewWrite from '~/components/atoms/ButtonReviewWrite'
import ButtonAllView from '~/components/atoms/ButtonAllView'
import SectionTitle from '~/components/molecules/SectionTitle'
import ReviewStatistics from '~/components/organisms/ReviewStatistics'
import ReviewList from '~/components/organisms/ReviewList'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    ButtonReviewWrite,
    ButtonAllView,
    SectionTitle,
    ReviewStatistics,
    ReviewList
  },
  async asyncData ({store}) {
    await store.dispatch('reviews/getAcademyStatistics', 1)
    await store.dispatch('reviews/getAcademyReviewList', 1)
  },
  computed: {
    ...mapState({
      allCount: state => state.reviews.allCount,
      isLogin: state => state.isLogin
    })
  },
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>

<style lang="scss">
</style>