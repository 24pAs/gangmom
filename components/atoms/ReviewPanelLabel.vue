<template>
  <strong class="review-panel-label">{{ label }}</strong>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .review-panel-label {
    display: block;
    font-size: 12px;
    font-weight: 800;
    font-family: inherit;
    @include breakpoint('pc') {
      font-size: 16px;
    }
  }
</style>