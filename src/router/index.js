import Vue from 'vue'
import Router from 'vue-router'

import Home from  '@/components/Home'
import Prueba from  '@/components/Prueba'
import Recipe from  '@/components/Recipe'
import Login from  '@/components/Login'
import Tracking from '@/components/Tracking'

Vue.use(Router);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/prueba',
    name: 'Prueba',
    component: Prueba
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tracking',
    name: 'Tracking',
    component: Tracking
  }
]

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router;
