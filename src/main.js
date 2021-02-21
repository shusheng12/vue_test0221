import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import './element_ui';
import 'element-ui/lib/theme-chalk/index.css'

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
