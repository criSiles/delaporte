import { createRouter, createWebHashHistory } from 'vue-router'
import DelaporteView from '@/views/delaporte/DelaporteView.vue'

const routes = [
  {
    path: '/',
    name: 'delaporte',
    component: DelaporteView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
