import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { ValidationObserver, ValidationProvider, localize } from 'vee-validate'

import './rules/index'
import './local/index'
import { getCode } from './api/login'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
localize('zh-CN')

axios.defaults.baseURL = process.env.NODE !== 'production' ? 'http://localhost:3000' : ''
Vue.prototype.$getCode = getCode
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
