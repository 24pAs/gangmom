<template>
  <div class="section__title">
    <title-text :title="title" />
    <title-count :count="count" />
  </div>
</template>
<script>
import TitleCount from '~/components/atoms/TitleCount'
import TitleText from '~/components/atoms/TitleText'
export default {
  components: {
    TitleCount,
    TitleText
  },
  props: {
    title: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.section__title {
  display: flex;
  align-items: center;
  padding-top: 40px;
}
.title-count {
  margin-left: 6px;
  @include breakpoint('pc') {
      margin-left: 10px;
  }
}
</style>