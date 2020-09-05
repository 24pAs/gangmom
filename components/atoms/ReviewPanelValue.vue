<template>
  <span class="review-panel-value">
    <slot name="value-ico" />
    <strong class="value">{{ value }}</strong>
    <span
      v-if="unit.length"
      class="unit"
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

<style>

</style>