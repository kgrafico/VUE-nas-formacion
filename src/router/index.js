import Vue from 'vue'
import Router from 'vue-router'
import projects from '../containers/projects'
import home from '../containers/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects
    }
  ]
})
