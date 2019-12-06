import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider, localize } from 'vee-validate'

import './rules/index'
import './local/index'

Vue.component('ValidationProvider', ValidationProvider)
localize('zh-CN')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
