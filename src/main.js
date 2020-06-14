import Vue from "vue";
import './core/lazy_use'

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { VueAxios } from './utils/request'
import './global.less'

Vue.config.productionTip = false;

// Vue.use(VueAxios);
setTimeout(() => {
	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount("#app");
}, 2000);
