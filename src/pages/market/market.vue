<template>
    <div class="container market">
        <navComponent></navComponent>
        <div class="background">
            <div class="background-img pc">
                <img
                    :src="require(`@/assets/img/index3/index_3-bg.png`)"
                    alt=""
                />
                <a
                    class="logo"
                    href="https://www.costco.com.tw/Household-Pet-Supplies/Cleaning-Laundry-Products/Laundry/FiJi-Laundry-Detergent-120-Sheet/p/138993"
                    target="_blank"
                >
                    <!-- 上 -->
                    <span></span>
                    <!-- 右 -->
                    <span></span>
                    <!-- 下 -->
                    <span></span>
                    <!-- 左 -->
                    <span></span>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index3/Costco_btn.png`)"
                        alt=""
                    />
                </a>
            </div>
            <div class="background-img mobile">
                <img
                    :src="require(`@/assets/img/index3/index_m_3.png`)"
                    alt=""
                />
                <a
                    class="logo"
                    href="https://www.costco.com.tw/Household-Pet-Supplies/Cleaning-Laundry-Products/Laundry/FiJi-Laundry-Detergent-120-Sheet/p/138993"
                    target="_blank"
                >
                    <!-- 上 -->
                    <span></span>
                    <!-- 右 -->
                    <span></span>
                    <!-- 下 -->
                    <span></span>
                    <!-- 左 -->
                    <span></span>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index3/Costco_btn.png`)"
                        alt=""
                    />
                </a>
            </div>

            <div class="buttons">
                <img
                    class="title"
                    :src="require(`@/assets/img/index3/title.png`)"
                    alt=""
                />
                <div class="group">
                    <a
                        href="https://www.lglife.com.tw/v2/official/SalePageCategory/356451?sortMode=Sales"
                        class="market-btn btn1"
                        target="_blank"
                        ><img
                            :src="require(`@/assets/img/index3/LG-button.png`)"
                            alt=""
                    /></a>
                    <a
                        href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=8932097&Area=search&mdiv=403&oid=1_1&cid=index&kw=FIJI"
                        class="market-btn btn2"
                        target="_blank"
                        ><img
                            :src="
                                require(`@/assets/img/index3/momo-button.png`)
                            "
                            alt=""
                    /></a>
                    <a
                        href="https://24h.pchome.com.tw/store/DAAK8U"
                        class="market-btn btn3"
                        target="_blank"
                        ><img
                            :src="
                                require(`@/assets/img/index3/pchome-button.png`)
                            "
                            alt=""
                    /></a>
                    <a
                        href="https://shopee.tw/FIJI%E9%A3%9B%E6%BC%AC%E4%B8%80%E7%B4%99%E6%B7%A830%E6%8A%BD2%E5%85%A5-%E7%8F%BE%E8%B2%A8-%E8%9D%A6%E7%9A%AE%E7%9B%B4%E9%80%81-i.37137599.20364065186?sp_atk=654f1366-7bb8-43ca-bf71-59a0faf88e88&xptdk=654f1366-7bb8-43ca-bf71-59a0faf88e88"
                        class="market-btn btn4"
                        target="_blank"
                        ><img
                            :src="
                                require(`@/assets/img/index3/shopee-button.png`)
                            "
                            alt=""
                    /></a>
                </div>
            </div>
            <!-- <img class="bottom pc" :src="require(`@/assets/img/index3/index_3_bottom.png`)" alt="" /> -->
            <div class="footer">
                <img
                    class="footer-logo"
                    :src="require(`@/assets/img/index3/LGlogo.png`)"
                    alt=""
                />
                <img
                    class="footer-p"
                    :src="require(`@/assets/img/index3/paragraph.png`)"
                    alt=""
                />
            </div>
            <!-- <img class="bottom mobile" :src="require(`@/assets/img/index3/index_m_3_bottom.png`)" alt="" /> -->
        </div>
    </div>
</template>
<script>
import navComponent from "../../component/nav/nav.vue";

export default {
    name: "MarketComponent",
    components: {
        navComponent,
    },
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {
        this.disableScrollY(false);
    },
    methods: {
        disableScrollY(hide) {
            const html = document.getElementsByTagName("html")[0];
            if (hide) {
                html.style.overflowY = "hidden";
            } else {
                html.style.overflowY = "auto";
            }
        },
    },
    filters: {},
};
</script>
<style lang="scss" src="./market.scss"></style>
