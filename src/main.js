import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Fancybox } from "@fancyapps/ui";
import { scrollRevealMixin } from "./mixin/scrollReveal";
import "./assets/scss/common/_reset.scss";
import "@fancyapps/ui/dist/fancybox.css";
import { imgsPreloader } from "./extension/imgPreloader.js";
import imgPreloaderList from "./extension/imgPreloaderList.js";
import VueAnalytics from "vue-analytics";

const isProd = false;

(async () => {
    await imgsPreloader(imgPreloaderList);
    document.querySelector(".loading").style.display = "none";
    Vue.config.productionTip = false;
    Vue.use(VueAnalytics, {
        id: "G-T9BMWQQ6D0",
        router,
        debug: {
            enabled: !isProd,
            sendHitTask: isProd,
        },
        autoTracking: {
            pageviewOnLoad: false,
        },
    });
    new Vue({
        router,
        Fancybox,
        mixins: [scrollRevealMixin],
        render: (h) => h(App),
    }).$mount("#app");
})();
