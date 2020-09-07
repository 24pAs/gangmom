<template>
  <button type="button" class="btn btn__review-write" :class="{'btn__review-write--inbox': btnType === 'inBox'}" @click="emit()">
    <span class="ico ico-reivew-write"></span>
    리뷰쓰기
  </button>
</template>
<script>
export default {
  props: {
    btnType: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.btn__review-write {
  background: #ff583f;
  color: #fff;
  .ico {
    margin-right: 6px;
    @include breakpoint('pc') {
      margin-right: 10px;
    }
  }
}
.btn__review-write.btn__review-write--inbox {
  width: 146px;
  height: 54px;
  border-radius: 10px;
  font-size: 16px;
  @include breakpoint('pc') {
    width: 318px;
    height: 70px;
    border-radius: 20px;
  }
  .ico {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    @include breakpoint('pc') {
      width: 12px;
      height: 12px;
    }
  }
}

</style>