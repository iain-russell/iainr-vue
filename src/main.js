import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import Icon from 'vue-awesome/icons'

Vue.component('icon', Icon)

require("./assets/css/style.css");
require("./assets/css/helpers.css");
require("./assets/main.scss");



new Vue({
  render: h => h(App)
}).$mount("#app");
