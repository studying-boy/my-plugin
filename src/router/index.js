import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const commonRouter = [
  {
    path: '/',
    components: () => import('../example/login.vue')
  },
  {
    path: '/login',
    components: () => import('../example/login.vue')
  }
]

export default new Router({
  routes: commonRouter
})