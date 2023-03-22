import { createRouter, createWebHistory } from 'vue-router'
import Logeo from '../views/LogeoView.vue'
import Home from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Logeo,
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: Home
    }
  ]
})

export default router
