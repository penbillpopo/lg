<template>
    <div class="container">
        <div class="page03">
            <div class="background">
                <img class="backgroundImg" :src="require(`@/assets/img/index3/index_3-bg.png`)" alt="" />
                <div class="buttons">
                    <a href="#" class="marketBtn"><img :src="require(`@/assets/img/index3/LG-button.png`)" alt="" /></a>
                    <a href="#" class="marketBtn"
                        ><img :src="require(`@/assets/img/index3/momo-button.png`)" alt=""
                    /></a>
                    <a href="#" class="marketBtn"
                        ><img :src="require(`@/assets/img/index3/pchome-button.png`)" alt=""
                    /></a>
                    <a href="#" class="marketBtn"
                        ><img :src="require(`@/assets/img/index3/shopee-button.png`)" alt=""
                    /></a>
                </div>
            </div>
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
