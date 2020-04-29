import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import Flexible from "amfe-flexible";
import Request from "./assets/js/request";
import FastClick from "fastclick";

import "vant/lib/index.less";
import "./assets/style/style.css";

Vue.use(Vant);
Vue.use(Request);
Vue.use(Flexible);
Vue.config.productionTip = false;

// 兼容毒瘤ios的300ms延迟问题
if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      (FastClick as any).attach(document.body);
    },
    false
  );
}
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
