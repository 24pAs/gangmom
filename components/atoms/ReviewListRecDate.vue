<template>
  <div class="review-list__rec-date">
    <span
      class="rec-date__rec"
    >추천함</span>
    <!-- <span
      v-if="recommended"
      class="rec-date__rec"
    >추천함</span> -->
    <span class="rec-date__date">{{ createdAt }}</span>
  </div>
</template>

<script>
export default {
  props: {
    recommended: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.review-list__rec-date {
  display: flex;
  align-items: center;
  min-height: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  @include breakpoint('pc') {
    padding-bottom: 0;
    border-bottom: none;
  }
}
.rec-date {
  &__rec {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 50px;
    background: #1fe233;
    font-size: 12px;
    color: #fff;
    @include breakpoint('pc') {
      padding: 4px;
      border-radius: 3px;
    }
  }
  &__date {
    flex: 1;
    font-size: 12px;
    font-weight: 600;
    color: #bfc3ca;
    text-align: right;
    @include breakpoint('pc') {
      &:before {
        content: '\b7\a0';
        display: inline-block;
        margin: 0 4px;
      }
    }
  }
}
</style>