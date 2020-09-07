<template>
  <p class="review-list__title">"{{ title }}"</p>
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
.review-list__title {
  margin-top: 5px;
  font-size: 20px;
  color: #000;
  @include breakpoint('pc') {
    margin-top: 0;
    font-size: 24px;
    font-weight: 600;
    color: $colorDarkGray;
  }
}
</style>