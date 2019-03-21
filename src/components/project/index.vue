
<template lang="html">
  <section class="project">
    <div class="image"></div>
    <div class="textContent">
      <div class="header-box">
        <h4 class="title">{{ title }}</h4>
        <div class="btns">
          <span> <i class="fas fa-pencil-alt"></i></span>
          <span> <i class="fas fa-times"></i></span>
        </div>
      </div>
      <p class="text">{{ text }}</p>
    </div>
  </section>

</template>

<script lang="js">
  import './project.scss'
  export default {
    name: 'project',
    props: ['title', 'text', 'id'],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
</style>
