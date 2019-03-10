<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        logo: 'Type something',
        add: 'Añadir nuevo'
      }
    }
  }
</script>
<style lang="scss">
</style>
