import Vue from "vue";
import App from "./App.vue";
import VueCroppie from "vue-croppie";
import "croppie/croppie.css"; // import the croppie css manually
Vue.use(VueCroppie);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
