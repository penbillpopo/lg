import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Fancybox } from "@fancyapps/ui";
import { scrollRevealMixin } from "./mixin/scrollReveal";
import "./assets/scss/common/_reset.scss";
import "@fancyapps/ui/dist/fancybox.css";
import VueGtag from "vue-gtag";

(async () => {
    Vue.config.productionTip = false;
    Vue.use(
        VueGtag,
        {
            config: { id: "G-T9BMWQQ6D0" },
        },
        router
    );
    new Vue({
        router,
        Fancybox,
        mixins: [scrollRevealMixin],
        render: (h) => h(App),
    }).$mount("#app");
})();
