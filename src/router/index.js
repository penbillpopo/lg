import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "../pages/index/index.vue";
import ShareComponent from "../pages/share/share.vue";
import MarketComponent from "../pages/market/market.vue";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAwesomeSwiper);

Vue.use(Router);

Vue.use(VueAxios, axios);

export default new Router({
    // mode: "history",
    routes: [
        {
            path: "/",
            name: "HomeComponent",
            component: HomeComponent,
        },
        {
            path: "/share",
            name: "ShareComponent",
            component: ShareComponent,
        },
        {
            path: "/market",
            name: "MarketComponent",
            component: MarketComponent,
        },
    ],
});
