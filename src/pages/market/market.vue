<template>
    <div class="container">
        <div class="background">
            <img class="background-img pc" :src="require(`@/assets/img/index3/index_3-bg.png`)" alt="" />
            <div class="buttons">
                <a href="#" class="market-btn btn1"
                    ><img :src="require(`@/assets/img/index3/LG-button.png`)" alt=""
                /></a>
                <a href="#" class="market-btn btn2"
                    ><img :src="require(`@/assets/img/index3/momo-button.png`)" alt=""
                /></a>
                <a href="#" class="market-btn btn3"
                    ><img :src="require(`@/assets/img/index3/pchome-button.png`)" alt=""
                /></a>
                <a href="#" class="market-btn btn4"
                    ><img :src="require(`@/assets/img/index3/shopee-button.png`)" alt=""
                /></a>
            </div>
            <img class="background-img mobile" :src="require(`@/assets/img/index3/index_m_3.png`)" alt="" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'MarketComponent',
    props: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
    filters: {},
};
</script>
<style scoped lang="scss" src="./market.scss"></style>
