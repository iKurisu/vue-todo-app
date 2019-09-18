import Vue from "vue";
import app from "./App.vue";
import "./styles.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(app)
}).$mount("#app");
