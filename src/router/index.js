import Vue from 'vue'
import Router from 'vue-router'

import Home from  '@/components/Home'
import Prueba from  '@/components/Prueba'
import Recipe from  '@/components/Recipe'
import Index from  '@/components/Index'

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
    path: '/index',
    name: 'Index',
    component: Index
  }
]

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router;
