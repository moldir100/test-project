import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import axios from 'axios'

import router from './router'

import HelloWorld from './components/HelloWorld.vue'

new Vue({
  render: h => h(HelloWorld),
  router
}).$mount('#app').use(bootstrap).use(axios)
