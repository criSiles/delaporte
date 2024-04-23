import { createRouter, createWebHistory } from 'vue-router'
import DelaporteView from '@/views/delaporte/DelaporteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'delaporte',
      component: DelaporteView
    }
  ]
})

export default router
