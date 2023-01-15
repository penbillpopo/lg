import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "../pages/index/index.vue";
import ShareComponent from "../pages/share/share.vue";
import MarketComponent from "../pages/market/market.vue";

import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";

Vue.use(VueAwesomeSwiper);

Vue.use(Router);

export default new Router({
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
