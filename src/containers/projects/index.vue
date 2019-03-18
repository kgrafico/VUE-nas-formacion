<template>
  <section class="home">
    <div class="border"></div>
    <h1>{{ logo }}</h1>
    <input class="search" type="text" v-model="inputText" placeholder="search...">
    <div v-if="showProjects">
      <project
        v-for="(project, index) of filteredProjects"
        :key="index"
        v-bind:title="project.title"
        v-bind:text="project.text"
        v-bind:id="project.id"
      />
    </div>
    <div v-if="!showProjects">No projects found</div>
  </section>
</template>

<script>
import project from "@/components/project";
export default {
  name: "projects",
  components: {
    project: project
  },
  props: [],
  data: () => ({
    projects: [
      {
        id: 1,
        title: "PROYECTO 1",
        text: "descripcion 1"
      },
      {
        id: 2,
        title: "PROYECTO 2",
        text: "descripcion 2"
      }
    ],
    inputText: "",
    logo: "My projects"
  }),
  computed: {
    filteredProjects: function() {
      return this.projects.filter(
        p => p.title.toLowerCase().indexOf(this.inputText.toLowerCase()) > -1
      );
    },
    showProjects: function() {
      return this.filteredProjects.length !== 0;
    }
  },
  methods: {
  }
};
</script>
<style src="./projects.scss" scoped lang="scss">
</style>

