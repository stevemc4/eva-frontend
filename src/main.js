// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'

import axios from 'axios'

Vue.use(VModal)

Vue.prototype.$axios = axios.create({
  baseURL: 'http://' + location.hostname + ':4200/api',
  withCredentials: true
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
