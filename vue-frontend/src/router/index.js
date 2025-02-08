import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/addtask',
      name: 'addtask',
      component: () => import('../views/AddTask.vue'),
    },
    {
      path: '/viewtask',
      name: 'viewtask',
      component: () => import('../views/ViewTask.vue'),
    },
    {
      path: '/edittask/:id',
      name: 'edittask',
      component: () => import('../views/EditTask.vue'),
    },
  ],
})

export default router
