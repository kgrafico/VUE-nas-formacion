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
  import project from '@/components/project'
  export default {
    name: 'projects',
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
<style src="./projects.scss" scoped lang="scss">
</style>

