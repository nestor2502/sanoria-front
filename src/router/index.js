import Vue from 'vue'
import Router from 'vue-router'

import Home from  '@/components/Home'
import Signup from '@/components/Signup'
import PersonInfo from '@/components/PersonInfo'
import AdicionalInfo from '@/components/Diet'
import Allergies from '@/components/Allergies'
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
    path: '/personinfo',
    name: 'PersonInfo',
    component: PersonInfo
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/diet',
    name: 'Diet',
    component: AdicionalInfo
  },
  {
    path: '/allergies',
    name: 'Allergies',
    component: Allergies
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
