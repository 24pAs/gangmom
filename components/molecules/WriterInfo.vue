<template>
  <div class="writer-info">
    <tags :tagsList="tags" />
    <writer :writer="writer" />
    <review-list-rec-date
      :recommended="recommended"
      :createdAt="createdAt"
    />
  </div>
</template>

<script>
import ReviewListRecDate from '~/components/atoms/ReviewListRecDate'
import Tags from '~/components/atoms/Tags'
import Writer from '~/components/atoms/Writer.vue'
export default {
  components: {
    ReviewListRecDate,
    Tags,
    Writer
  },
  props: {
    tags: {
      type: Array,
      default: (() => [])
    },
    writer: {
      type: String,
      default: ''
    },
    recommended: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.writer-info {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @include breakpoint('pc') {
    justify-content: flex-start;
  }
  .tags {
    @include breakpoint('pc') {
      order: 2;
    }
  }
  .writer {
    @include breakpoint('pc') {
      order: 1;
    }
  }
  .review-list__rec-date {
    display: none;
    @include breakpoint('pc') {
      order: 3;
    }
  }
}
</style>