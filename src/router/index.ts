import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/HexagonView',
    name: 'HexagonView',
    component: () => import('@/views/HexagonView.vue')
  },
  {
    path: '/WavyCirclesView',
    name: 'WavyCirclesView',
    component: () => import('@/views/WavyCirclesView.vue')
  },
  {
    path: '/ScrollingTextView',
    name: 'ScrollingTextView',
    component: () => import('@/views/ScrollingTextView.vue')
  },
  {
    path: '/RainView',
    name: 'RainView',
    component: () => import('@/views/RainView.vue')
  },
  {
    path: '/CubeView',
    name: 'CubeView',
    component: () => import('@/views/CubeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
