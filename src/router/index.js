import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '../views/Gallery.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/film/:index',
      name: 'film',
      component: () => import('../views/FilmInfo.vue')
    }
  ]
})

export default router
