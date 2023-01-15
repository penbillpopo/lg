<template>
    <div class="container">
        <div class="page02">
            <div class="topBg">
                <img class="topImg" :src="require(`@/assets/img/index2-1/index_2-1_bg.png`)" alt="" />
                <img class="logo" :src="require(`@/assets/img/index2-1/FIJI logo.png`)" alt="" />
                <img class="step1" :src="require(`@/assets/img/index2-1/step 1.png`)" alt="" />
                <img class="step2" :src="require(`@/assets/img/index2-1/step 2.png`)" alt="" />
            </div>

            <div class="botBg">
                <img class="botImg" src="./index_2-2_bg.png" alt="" />
                <div class="fbShare">
                    <img class="share" :src="require(`@/assets/img/index2-1/txt_1.png`)" alt="" />
                    <img class="share" :src="require(`@/assets/img/index2-1/txt_2.png`)" alt="" />
                    <img class="share" :src="require(`@/assets/img/index2-1/txt_3.png`)" alt="" />
                    <img class="share" :src="require(`@/assets/img/index2-1/txt_4.png`)" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ShareComponent',
    props: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
    filters: {},
};
</script>
<style scoped lang="scss" src="./share.scss"></style>
