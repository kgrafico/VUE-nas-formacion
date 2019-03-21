<template>
  <section class="home">
    <div class="border"></div>
    <h1>{{ logo }}</h1>
    <input class="search" type="text" v-model="inputText" placeholder="search...">
    <div v-if="showProjects">
      <section class="project" v-if="filteredProjects[0]">
        <div class="image"></div>
        <div class="textContent">
          <div class="header-box">
            <h4 class="title">{{ filteredProjects[0].title }}</h4>
            <div class="btns">
              <span>
                <i class="fas fa-times"></i>
              </span>
              <span>
                <i class="fas fa-pencil-alt"></i>
              </span>
            </div>
          </div>
          <p class="text">{{ filteredProjects[0].text }}</p>
        </div>
      </section>
      <section class="project" v-if="filteredProjects[1]">
        <div class="image"></div>
        <div class="textContent">
          <div class="header-box">
            <h4 class="title">{{ filteredProjects[1].title }}</h4>
            <div class="btns">
              <span>
                <i class="fas fa-times"></i>
              </span>
              <span>
                <i class="fas fa-pencil-alt"></i>
              </span>
            </div>
          </div>
          <p class="text">{{ filteredProjects[1].text }}</p>
        </div>
      </section>
    </div>
    <div v-if="!showProjects">No projects found</div>
  </section>
</template>

<script>
export default {
  name: "projects",
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
  methods: {}
};
</script>
<style src="./projects.scss" scoped lang="scss">
</style>

