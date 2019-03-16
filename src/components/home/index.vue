<template>
  <section class="home">
    <div class="border"></div>
    <h1>{{ logo }}</h1>
    <project></project>
    <project></project>
    <project></project>
    <button class="addNewProject">{{ add }}</button>
  </section>
</template>

<script>
  import project from '@/components/view-parts/project'
  export default {
    name: 'home',
    components: {
      'project': project
    },
    props: [],
    data () {
      return {
        logo: 'Type Something',
        add: 'Añadir nuevo'
      }
    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
  }

</script>
<style src="./home.scss" scoped lang="scss">
</style>

