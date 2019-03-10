import Vue from 'vue'
import Router from 'vue-router'
import ListProjects from '@/components/ListProjects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListProjects',
      component: ListProjects
    }
  ]
})
