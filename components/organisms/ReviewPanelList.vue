<template>
  <div class="review-panel-list">
    <review-panel
      v-for="(title, index) in titles"
      :key="index"
      :title="title"
      :list="statistics"
    />
  </div>
</template>

<script>
import ReviewPanel from '~/components/molecules/ReviewPanel'
import {mapState} from 'vuex'
export default {
  components: {
    ReviewPanel
  },
  data() {
    return {
      titles:['별점 평균', '별점 비율', '추천 비율']
    }
  },
  computed: {
    ...mapState({
      statistics: state => state.reviews.academyStatistics
    })
  }
}
</script>

<style>

</style>