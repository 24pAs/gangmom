<template>
  <h2 class="title-text">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-text {
    font-size: 24px;
    color: $colorDarkGray;
    font-family: inherit;
    @include breakpoint('pc') {
      font-size: 32px;
    }
  }
</style>