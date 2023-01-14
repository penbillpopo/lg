import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/common/_reset.scss";
import { scrollRevealMixin } from "./mixin/scrollReveal";

Vue.config.productionTip = false;

new Vue({
    router,
    mixins: [scrollRevealMixin],
    render: (h) => h(App),
}).$mount("#app");
