import VueRouter from 'vue-router'

import App from './App.vue'

export default new VueRouter({
  base: '/v-dragged',
  routes: [
    {
      path: '/',
      component: App
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})