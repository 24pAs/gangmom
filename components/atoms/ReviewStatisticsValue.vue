<template>
  <span class="review-statistics__value">
    <span class="value__ico">
      <slot name="value-ico" />
    </span>
    <strong class="value__text">{{ value }}</strong>
    <span
      v-if="unit.length"
      class="value__unit"
    >{{ unit }}</span>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    unit: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .review-statistics__value {
    display: block;
    font-size: 0;
    text-align: center;
  }
  .value {
    &__ico {
      display: inline-block;
      margin-right: 4px;
      vertical-align: middle;
      @include breakpoint('pc') {
        margin-right: 8px;
      }
    }
    &__text {
      font-size: 16px;
      color: $colorDarkGray;
      vertical-align: middle;
      @include breakpoint('pc') {
        font-size: 40px;
      }
    }
    &__unit {
      margin-left: 4px;
      font-size: 10px;
      color: #a0a5ae;
      vertical-align: middle;
      @include breakpoint('pc') {
        margin-left: 0;
        font-size: 24px;
      }
    }
  }
</style>