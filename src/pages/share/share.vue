<template>
    <div class="container">
        <div class="page02">
            <div class="topBg">
                <img class="topImg" :src="require(`@/assets/img/index2-1/index_2-1_bg.png`)" alt="" />
                <img class="logo" :src="require(`@/assets/img/index2-1/FIJI logo.png`)" alt="" />
                <img class="step1" :src="require(`@/assets/img/index2-1/step 1.png`)" alt="" />
                <img class="step2" :src="require(`@/assets/img/index2-1/step 2.png`)" alt="" />
                <a href="#"><img class="shareBtn" :src="require(`@/assets/img/index2-1/btn.png`)" alt="" /></a>
            </div>
            <!--  -->
            <div class="botBg">
                <img class="botImg" :src="require(`@/assets/img/index2-1/index_2-2_bg.png`)" alt="" />
                <!-- <div class="fbShare1"> -->
                <img class="share1" :src="require(`@/assets/img/index2-1/txt_1-1.png`)" alt="" />
                <!-- </div> -->
                <img class="share2" :src="require(`@/assets/img/index2-1/txt_2-2.png`)" alt="" />
                <img class="share3" :src="require(`@/assets/img/index2-1/txt_3-3.png`)" alt="" />
                <img class="share4" :src="require(`@/assets/img/index2-1/txt_4-4.png`)" alt="" />
                <!-- Add Facebook Share Button -->
                <a href="" class="fbBtn1"><img :src="require(`@/assets/img/index2-1/fbBtn.png`)" alt="" /></a>
                <a href="" class="fbBtn2"><img :src="require(`@/assets/img/index2-1/fbBtnM.png`)" alt="" /></a>
                <a href="" class="fbBtn3"><img :src="require(`@/assets/img/index2-1/fbBtnM.png`)" alt="" /></a>
                <a href="" class="fbBtn4"><img :src="require(`@/assets/img/index2-1/fbBtn.png`)" alt="" /></a>
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
