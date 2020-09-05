<template>
  <span class="title-count">
    총 {{ count }}개
  </span>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .title-count {
    font-size: 16px;
    font-weight: 800;
    color: #A0A5AE;
    font-family: inherit;
  }
</style>