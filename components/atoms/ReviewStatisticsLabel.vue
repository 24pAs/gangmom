<template>
  <strong class="review-statistics__label">{{ label }}</strong>
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
  .review-statistics__label {
    display: block;
    font-size: 12px;
    font-family: inherit;
    text-align: center;
    @include breakpoint('pc') {
      font-size: 16px;
    }
  }
</style>