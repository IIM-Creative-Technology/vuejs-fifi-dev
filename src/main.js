import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:8080/api/'

Vue.use(Vuesax, {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
