import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import Childs from "./components/Childs.vue";
import Prices from "./components/Prices.vue";
import Declare from "./components/Declare.vue";

Vue.config.productionTip = false;

// Vuex & Vue Persist
Vue.use(Vuex);
import Store from "./store.js";
const store = new Vuex.Store(Store);

// Vue Router
Vue.use(VueRouter);

const routes = [
  { path: "/childs", component: Childs },
  { path: "/prices", component: Prices },
  { path: "/declare", component: Declare }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
