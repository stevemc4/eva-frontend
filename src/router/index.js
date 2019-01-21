import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

import Installer from '@/pages/InstallerRoot'
import InstallerMain from '@/pages/installer/Index'
import InstallerDatabaseSetup from '@/pages/installer/DatabaseSetup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
  ]
})
