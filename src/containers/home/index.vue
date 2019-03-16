<template>
  <div class="welcomeBox">
    <span>VUE-nas</span>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="scss">
  .welcomeBox {
    display: flex;
    justify-content: center;
    height: 100%;
    span {
      display: flex;
      align-items: center;
      color: #9DB6EC;
      font-weight: 800;
      font-size: 1.5em;
    }
  }
</style>
