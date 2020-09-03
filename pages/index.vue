<template>
  <div>
    <div class="grid">
      {{ $store.state.isLogin }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async fetch({store}){
    await store.dispatch('login')
  },
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>

<style lang="scss">
  .container {margin: 10px;}
</style>