<template>
  <div class="review-list__proscons">
    <div v-if="pros.length" class="proscons__box">
      <strong class="proscons__title proscons__title--pros">
        <span class="ico ico-pros"></span>
        좋은점
      </strong>
      <p class="proscons__text">{{ pros }}</p>
    </div>
    <div v-if="cons.length" class="proscons__box">
      <strong class="proscons__title proscons__title--cons">
        <span class="ico ico-cons"></span>
        아쉬운점
      </strong>
      <p class="proscons__text">{{ cons }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pros: {
      type: String,
      default: ''
    },
    cons: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.review-list__proscons {
  @include breakpoint('pc') {
    display: flex;
    width: 53%;
  }
}
.proscons {
  &__box {
    flex: 1;
    margin-top: 21px;
    @include breakpoint('pc') {
      margin-top: 0;
      margin-left: 30px;
      padding-left: 20px;
      border-left: 1px solid #e5e6ec;
    }
  }
  &__title {
    font-size: 12px;
    line-height: 14px;
    @include breakpoint('pc') {
      font-size: 16px;
      line-height: 1.5;
    }
    &--pros {
      color: #6ecd56;
    }
    &--cons {
      color: #d95c5c;
    }
    .ico {
      margin-right: 4;
      vertical-align: middle;
      @include breakpoint('pc') {
        display: none;
      }
    }
  }
  &__text {
    margin-top: 13px;
    font-size: 12px;
    font-weight: 600;
    color: $colorDarkGray;
    line-height: 2;
    @include breakpoint('pc') {
      display: block;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      max-height: 6em;
      margin-top: 0;
      font-size: 16px;
      text-overflow: ellipsis;
    }
  }
}
</style>