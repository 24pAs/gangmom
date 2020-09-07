<template>
  <span class="tags">
    <template v-for="(tag, index) in tagsList">
      <span v-if="tag" :key="index" class="tag">{{ tag }}</span>
    </template>
  </span>
</template>

<script>
export default {
  props: {
    tagsList: {
      type: Array,
      default: (() => [])
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: block;
}
.tag {
  display: inline-block;
  margin-right: 2px;
  padding: 4px;
  background: #f4f5f8;
  font-size: 10px;
  font-weight: 600;
  color: #a0a5ae;
  @include breakpoint('pc') {
    margin-right: 4px;
    font-size: 12px;
  }
}
</style>