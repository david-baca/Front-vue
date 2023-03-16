import { createRouter, createWebHistory } from 'vue-router'
import Logeo from '../views/LogeoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Logeo
    }
  ]
})

export default router
