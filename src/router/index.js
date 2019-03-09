import Vue from 'vue'
import Router from 'vue-router'

import axios from 'axios'

import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Unauthorized from '@/pages/401'
import NotFound from '@/pages/404'

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
        title: 'Daftar Kandidat',
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
    },
    {
      path: '/unauthorized',
      name: '401 Unauthorized',
      component: Unauthorized,
      meta: {
        title: '401 Tidak Diizinkan'
      }
    },
    {
      path: '/*',
      name: '404 Not Found',
      component: NotFound,
      meta: {
        title: '404 Tidak Ditemukan'
      }
    }
  ],
})

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title || 'Judul Default'} - Project EVA`
  if(to.name == 'Login'){
    try{
      let request = axios.create({
        baseURL: 'http://' + location.hostname + ':4200/api',
        withCredentials: true
      })
      let data = await request.get('auth/check')
      if(data.data.payload.level == 0)
        next('/dashboard')
      else
        next('/')
    }
    catch(e){
      next()
    }
  }
  if(to.meta.requireAuth == true){
    try{
      let request = axios.create({
        baseURL: 'http://' + location.hostname + ':4200/api',
        withCredentials: true
      })
      let data = await request.get('auth/check')
      if(to.meta.authLevel != undefined)
        if(data.data.payload.level == to.meta.authLevel)
          next()
        else
          next('/unauthorized')
      else
        next()
    }
    catch(e){
      if(to.name == 'Home')
        next('/login')
      else
        next('/unauthorized')
    }
  }
  else
    next()
})

export default router