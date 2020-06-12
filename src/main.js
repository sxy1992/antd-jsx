import Vue from "vue";
import { Button } from "ant-design-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueAxios } from './utils/request'

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(VueAxios);
setTimeout(() => {
	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount("#app");
}, 2000);
