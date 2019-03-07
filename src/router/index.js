import Vue from 'vue'
import Router from 'vue-router'

import axios from 'axios'

import Login from '@/pages/Login'
import Home from '@/pages/Home'

import Installer from '@/pages/InstallerRoot'
import InstallerMain from '@/pages/installer/Index'
import InstallerDatabaseSetup from '@/pages/installer/DatabaseSetup'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Halaman Utama',
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/installer',
      component: Installer,
      children: [
        {
          path: '/',
          name: 'Main',
          component: InstallerMain
        },
        {
          path: 'dbsetup',
          name: 'DatabaseSetup',
          component: InstallerDatabaseSetup
        }
      ]
    }
  ],
})

router.beforeEach(async (to, from, next) => {
  if(to.meta.requireAuth == true){
    try{
      let data = await axios.get('localhost:4200/api/auth/check', {
        withCredentials: true
      })
      console.log('asd')
    }
    catch(e){
      next('/unauthorized')
    }
  }
  else
    next()
})

export default router