<template>
  <div id="app">
    <div class="border"></div>
    <h1>{{ logo }}</h1>
    <router-view/>
    <button class="addNewProject">{{ add }}</button>
  </div>
</template>

<script>
// import './App.scss'
export default {
  name: 'App',
  data () {
    return {
      logo: 'Type something',
      add: 'Añadir nuevo'
    }
  }
}
</script>

<style lang="scss">
  h1, h2 {
    padding: 5px;
    width: 100%;
    margin: 10px auto;
    max-width: 230px;
    border: 5px solid #9DB6EC;
    color: #9DB6EC;
    font-weight: 800;
    font-size: 1.5em;
  }
  .border {
    height: 15px;
    width: 100%;
    background-color: #9DB6EC;
  }

  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .addNewProject {
    border: 1px solid grey;
    border-radius: 5px;
    background-color: white;
    padding: 5px 15px 5px 15px;
    font-size: 1em;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    color: grey;
    display: flex;
    margin: 0 auto;
  }
</style>
