import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

let testRoot = '/Zebra_Corporate_Digital/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: testRoot,
      name: 'home',
      component: HomeView
    },
  ]
})

export default router