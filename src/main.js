import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import Icon from 'vue-awesome/icons'
import Modal from 'buefy/dist/components/modal'
import 'buefy/dist/buefy.css';

Vue.component('icon', Icon)
Vue.use(Modal);

require("./assets/css/style.css");
require("./assets/css/helpers.css");
require("./assets/main.scss");



new Vue({
  render: h => h(App)
}).$mount("#app");
