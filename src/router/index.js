import Vue from 'vue'
import Router from 'vue-router'

import Home from  '@/components/Home'
import Prueba from  '@/components/Prueba'

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
  }
]

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router;
