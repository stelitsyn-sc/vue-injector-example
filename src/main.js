import "reflect-metadata";
import Vue from "vue";
import App from "./App.vue";
import injector from "./services/setup";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  injector
}).$mount("#app");
