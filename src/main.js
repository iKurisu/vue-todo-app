import Vue from "vue";
import app from "./App.vue";
import store from "./store";
import "./styles.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(app)
}).$mount("#app");
