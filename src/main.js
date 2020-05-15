import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { ValidationObserver, ValidationProvider } from "vee-validate";

import "./util/validate";
// import "./util/validate-i18n";
import { getCode } from "./api/login";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

axios.defaults.baseURL =
  process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "";
Vue.prototype.$getCode = getCode;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
