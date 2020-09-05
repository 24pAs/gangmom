<template>
  <div class="section-title">
    <title-text :title="title" />
    <title-count :count="count" />
  </div>
</template>
<script>
import TitleText from '~/components/atoms/TitleText'
import TitleCount from '~/components/atoms/TitleCount'
export default {
  components: {
    TitleText,
    TitleCount
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
.section-title {
  display: flex;
  align-items: center;
  padding-top: 40px;
  font-family: 'NanumSqureRound';
}
.title-count {
  margin-left: 6px;
  @include breakpoint('pc') {
      margin-left: 10px;
  }
}
</style>