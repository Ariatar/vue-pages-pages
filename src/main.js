import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "../public/scss/main.scss";
import dateFilter from "@/filters/date.filter";

Vue.use(require("vue-moment"));

import Vuetify from "vuetify";
Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.filter("date", dateFilter);

new Vue({
   router,
   store,
   vuetify,
   render: h => h(App)
}).$mount("#app");
