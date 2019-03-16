<template>
  <div id="app">
    <router-view />
    <div class="menuRoutes">
      <div class="buttonStyle">
        <router-link to="/">Home</router-link>
      </div>
      <div class="buttonStyle">
        <router-link to="/projects">Projects</router-link>
      </div>
    </div>
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
  .menuRoutes{
    position:fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    .buttonStyle {
      width: 50%;
      justify-content: center;
      display: flex;
      background-color: #e2e1e1;
      font-weight: 200;
      &:hover {
        background-color: #9DB6EC;
      }
      a {
        padding: 20px;
        text-decoration:none;
        width: 100%;
        display: flex;
        justify-content: center;
        &:visited {
          color: black;
        }
        &:hover {
          background-color: #9DB6EC;
        }
        &:active {
          background-color: #9DB6EC;
        }
      }
    }
  }
</style>
