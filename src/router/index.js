import Vue from 'vue'
import Router from 'vue-router'

import storage from "../storage"

import Home from  '@/components/Home'
import Signup from '@/components/Signup'
import PersonInfo from '@/components/PersonInfo'
import AdicionalInfo from '@/components/Diet'
import Allergies from '@/components/Allergies'
import NotFound  from '@/components/NotFound'
import Recipe from  '@/components/Recipe'
import Food from  '@/components/Food'
import Scheme from '@/components/Scheme'
import Login from  '@/components/Login'
import Tracking from '@/components/Tracking'
import Search from  '@/components/Search'
import Index from  '@/components/Index'
import Profile from '@/components/Profile'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/personinfo',
    name: 'PersonInfo',
    component: PersonInfo,
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
    path: "*", 
    component: NotFound 
  }, 
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/food',
    name: 'Food',
    component: Food,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/scheme',
    name: 'Scheme',
    component: Scheme,
    meta: {
      requiresAuth: true
    }
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/tracking',
    name: 'Tracking',
    component: Tracking,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

router.beforeEach((to, from, next) => {
  const authenticatedUser = storage.getStorage('user');
  //storage.removeStorage('user')
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && ! authenticatedUser) next('login')
    else next();
  next()
});

export default router;
