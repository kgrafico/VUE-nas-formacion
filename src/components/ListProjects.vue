<template>
  <div class="pojects">
    <img class="imgProject" src="/static/img/img-ciudad.jpg">
    <div class="textContent">
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListProjects',
  data () {
    return {
      title: 'Título',
      text: 'Esto es el texto para un proyecto'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .imgProject {
    width: 100%;
  }

  /* borrar */

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
