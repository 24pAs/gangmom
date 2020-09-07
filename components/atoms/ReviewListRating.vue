<template>
  <div class="review-list__rating">
    <span v-for="index in 5" :key="index" class="ico ico-star__rating" :class="{'ico-star__rating--on': index <= rating}" />
    <span class="rating__rating">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ico {
  margin-right: 3px;
  vertical-align: top;
}
.rating__rating {
  display: inline-block;
  margin-left: 3px;
  font-size: 15px;
  color: $colorDarkGray;
}
</style>