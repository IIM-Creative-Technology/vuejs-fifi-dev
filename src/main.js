import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import store from "./store";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'


Vue.config.productionTip = false;


axios.defaults.baseUrl = 'http://localhost:8080/';

Vue.use(Vuesax, {})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');