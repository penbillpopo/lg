import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "../pages/index/index.vue";
import MarketComponent from "../pages/market/market.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "HomeComponent",
            component: HomeComponent,
        },
        {
            path: "/market",
            name: "MarketComponent",
            component: MarketComponent,
        },
    ],
});
