import { createRouter, createWebHistory } from 'vue-router'
import Logeo from '../views/LogeoView.vue'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Logeo,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})

export default router
