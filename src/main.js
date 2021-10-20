import Vue from "vue";
import App from "./App.vue";
import router from "./js/router";
import store from "./js/datastore";
import components from "./js/components";
import "./icons";

import "./index.css";

Vue.config.productionTip = false;

// Import all components from /js/components.js
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

// Init Vue app.
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
