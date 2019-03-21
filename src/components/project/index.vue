
<template lang="html">
  <section class="project">
    <div class="image"></div>
    <div class="textContent">
      <div class="header-box">
        <h4 v-if="!editing" class="title">{{ title }}</h4>
        <input v-if="editing" v-model="title" class="title inputStyle">
        <div class="btns">
          <span @click="edit"> <i class="fas fa-pencil-alt"></i></span>
          <span @click="onRemove"> <i class="fas fa-times"></i></span>
        </div>
      </div>
      <p v-if="!editing" class="text">{{ text }}</p>
      <input v-if="editing" v-model="text" class="text inputStyle">
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
        editing: false
      }
    },
    methods: {
      onRemove (event) {
        this.$emit('remove', this.id)
      },
      edit: function() {
          this.editing = !this.editing;
      }
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
</style>
