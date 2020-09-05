<template>
  <div class="grid">
    <div class="grid-wide">
      <section-title
        title="리뷰"
        :count="allCount"
      />
      <review-panel-list />
    </div>
  </div>
</template>

<script>
import SectionTitle from '~/components/molecules/SectionTitle'
import ReviewPanelList from '~/components/organisms/ReviewPanelList'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    SectionTitle,
    ReviewPanelList
  },
  fetch({store}) {
    return store.dispatch('reviews/getAcademyStatistics', 1)
  },
  computed: {
    ...mapState({
      allCount: state => state.reviews.allCount
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