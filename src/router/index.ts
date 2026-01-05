import TodoListUpdate from '@/views/TodoListUpdate.vue'
import TodoListView from '@/views/TodoListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodoListView,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: TodoListUpdate,
    },
  ],
})

export default router
