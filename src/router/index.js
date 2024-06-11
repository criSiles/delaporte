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

// TODO: Consider using a URL structure without hashes to improve SEO and accessibility
// import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       return { top: 0 }
//     }
//   }
// })
