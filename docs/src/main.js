import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import VDragged from './VDragged/v-dragged'
import vueDirectiveTooltip from 'vue-directive-tooltip'
import VueGitHubCorners from 'vue-gh-corners'

import hljs from 'vue-highlightjs'

import 'vue-gh-corners/dist/vue-github-corners.css'

Vue.use(VueGitHubCorners)

Vue.use(VueRouter)
Vue.use(hljs)
Vue.use(VDragged)
Vue.use(vueDirectiveTooltip, { delay: 0, placement: 'right', class: 'tooltip-red', offset: 10 });

new Vue({
  router
}).$mount('#app')
