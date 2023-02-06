import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Fancybox } from "@fancyapps/ui";
import { scrollRevealMixin } from "./mixin/scrollReveal";
import "./assets/scss/common/_reset.scss";
import "@fancyapps/ui/dist/fancybox.css";

Vue.config.productionTip = false;
(async () => {
    new Vue({
        router,
        Fancybox,
        mixins: [scrollRevealMixin],
        render: (h) => h(App),
    }).$mount("#app");
})();
