<template>
    <div class="container">
        <div class="page02">
            <div class="top-bg">
                <img
                    class="top-img"
                    :src="require(`@/assets/img/index2-1/index_2-1_bg.png`)"
                    alt=""
                />
                <img
                    class="logo"
                    :src="require(`@/assets/img/index2-1/FIJI logo.png`)"
                    alt=""
                />
                <img
                    class="step1"
                    :src="require(`@/assets/img/index2-1/step 1.png`)"
                    alt=""
                />
                <img
                    class="step2"
                    :src="require(`@/assets/img/index2-1/step 2.png`)"
                    alt=""
                />
                <a href="#"
                    ><img
                        class="share-btn"
                        :src="require(`@/assets/img/index2-1/btn.png`)"
                        alt=""
                /></a>
                <!-- Bubble -->
                <img
                    class="bubble-1"
                    :src="require(`@/assets/img/index2-1/93.png`)"
                    alt=""
                />
                <img
                    class="bubble-2"
                    :src="require(`@/assets/img/index2-1/95.png`)"
                    alt=""
                />
                <img
                    class="bubble-3"
                    :src="require(`@/assets/img/index2-1/96.png`)"
                    alt=""
                />
            </div>
            <!-- Content Sliders -->
            <div class="bottom-bg">
                <!-- Share content -->
                <img
                    class="bottom-img"
                    :src="require(`@/assets/img/index2-1/index_2-2_bg.png`)"
                    alt=""
                />
                <img
                    class="share1"
                    :src="require(`@/assets/img/index2-1/txt_1-1.png`)"
                    alt=""
                />
                <img
                    class="share2"
                    :src="require(`@/assets/img/index2-1/txt_2-2.png`)"
                    alt=""
                />
                <img
                    class="share3"
                    :src="require(`@/assets/img/index2-1/txt_3-3.png`)"
                    alt=""
                />
                <img
                    class="share4"
                    :src="require(`@/assets/img/index2-1/txt_4-4.png`)"
                    alt=""
                />
                <!-- Add Facebook Share Button -->
                <button class="fb-btn1" @click="onShareClick()">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtn.png`)"
                        alt=""
                    />
                </button>
                <button class="fb-btn2">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtnM.png`)"
                        alt=""
                    />
                </button>
                <button class="fb-btn3">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtnM.png`)"
                        alt=""
                    />
                </button>
                <button class="fb-btn4">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtn.png`)"
                        alt=""
                    />
                </button>
                <img
                    class="talk1"
                    :src="require(`@/assets/img/index2-1/talk.png`)"
                    alt=""
                />
                <a class="share-more" href=""
                    ><img
                        :src="
                            require(`@/assets/img/index2-1/btn-shareMore.png`)
                        "
                        alt=""
                /></a>
                <img
                    class="image1"
                    :src="require(`@/assets/img/index2-1/images1.png`)"
                    alt=""
                />
                <img
                    class="image2"
                    :src="require(`@/assets/img/index2-1/images2.png`)"
                    alt=""
                />
                <img
                    class="image3"
                    :src="require(`@/assets/img/index2-1/images3.png`)"
                    alt=""
                />
                <img
                    class="talk2"
                    :src="require(`@/assets/img/index2-1/talk2.png`)"
                    alt=""
                />
                <a href=""
                    ><img
                        class="like-btn"
                        :src="
                            require(`@/assets/img/index2-1/btn-likeItTonight.png`)
                        "
                        alt=""
                /></a>
                <img
                    class="image4"
                    :src="require(`@/assets/img/index2-1/images4.png`)"
                    alt=""
                />
                <img
                    class="image5"
                    :src="require(`@/assets/img/index2-1/images5.png`)"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ShareComponent",
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {
        window.fbAsyncInit = function () {
            /* global FB */
            FB.init({
                appId: "935058840744913",
                cookie: true,
                xfbml: true,
                version: "v11.0",
            });
        };
    },
    methods: {
        onShareClick() {
            FB.ui(
                {
                    display: "popup",
                    method: "share",
                    href: "https://developers.facebook.com/docs/",
                },
                function (response) {
                    console.log(response);
                }
            );
        },
    },
    filters: {},
};
</script>
<style scoped lang="scss" src="./share.scss"></style>
