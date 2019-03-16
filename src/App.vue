<template>
  <div id="app">
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/projects">Go to projects</router-link>
    </li>
  </ul>
    <router-view />
  </div>
</template>

<script>
// import scss
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
