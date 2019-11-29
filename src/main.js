/** polyfill */
import "core-js/features/reflect";

import Vue from "vue";
import App from "./App.vue";
import injector from "./services";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  injector
}).$mount("#app");
