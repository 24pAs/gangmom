<template>
  <span class="writer">
    <span class="writer-nickname">{{writer}}</span>
    <span class="ico ico-writer"></span>
  </span>
</template>

<script>
export default {
  props: {
    writer: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.writer {
  display: flex;
  align-items: center;
  &-nickname {
    margin-right: 5px;
    font-size: 12px;
    color: #a0a5ae;
    @include breakpoint('pc') {
      order: 2;
      margin: 0 0 0 10px;
      font-size: 12px;
      &:after {
        content: '\b7\a0';
        display: inline-block;
        margin: 0 4px;
      }
    }
  }
  .ico {
    @include breakpoint('pc') {
      order: 1
    }
  }
}
</style>