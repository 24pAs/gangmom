<template>
  <div class="review-list__content">
    <review-list-rating :rating="content.rating" />
    <div class="review-list__comment">
      <review-list-title :title="content.title" />
      <review-list-proscons 
        :pros="content.pros" 
        :cons="content.cons" 
      />
    </div>
  </div>
</template>

<script>
import ReviewListRating from '~/components/atoms/ReviewListRating'
import ReviewListTitle from '~/components/atoms/ReviewListTitle'
import ReviewListProscons from '~/components/atoms/ReviewListProscons'
export default {
  components: {
    ReviewListRating,
    ReviewListTitle,
    ReviewListProscons
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.review-list {
  &__content {
    padding-top: 10px;
    @include breakpoint('pc') {
      padding-top: 0;
    }
  }
  &__comment {
    @include breakpoint('pc') {
      display: flex;
      margin-top: 20px;
    }
  }
  &__title {
    @include breakpoint('pc') {
      width: 47%;
    }
  }
}
</style>