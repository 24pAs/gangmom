<template>
  <button type="button" class="btn btn__all-view" @click="emit()">
    {{ text }} 전체보기
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.btn__all-view {
  background: #e5e6ec;
  color: #808793;
}
</style>