<template>
  <section class="home">
    <div class="border"></div>
    <h1>My projects</h1>
    <section class="project">
      <div class="image"></div>
      <div class="textContent">
        <div class="header-box">
          <h4 class="title">Título</h4>
          <div class="btns">
            <span>
              <i class="fas fa-times"></i>
            </span>
            <span>
              <i class="fas fa-pencil-alt"></i>
            </span>
          </div>
        </div>
        <p class="text">texto de ejemplo</p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "projects",
  props: [],
  data: () => ({
  }),
  computed: {},
  methods: {}
};
</script>
<style src="./projects.scss" scoped lang="scss">
</style>

