import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ValidationObserver, ValidationProvider } from "vee-validate";

import "./utils/validate";
import alert from "./components/modules/alert";
// import "./utils/validate-i18n";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.use(alert);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
