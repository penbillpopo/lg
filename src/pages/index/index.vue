<template>
    <div class="container">
        <div class="section1">
            <div class="flex-box">
                <img
                    class="col25 ani"
                    :src="require(`@/assets/img/index1-0/01.jpg`)"
                    alt=""
                />
                <img
                    class="col25 ani delay-1"
                    :src="require(`@/assets/img/index1-0/02.jpg`)"
                    alt=""
                />
                <img
                    class="col25 ani delay-2"
                    :src="require(`@/assets/img/index1-0/03.jpg`)"
                    alt=""
                />
                <img
                    class="col25 ani delay-3"
                    :src="require(`@/assets/img/index1-0/04.jpg`)"
                    alt=""
                />
            </div>
            <button class="scroll-btn" @click="scrollToSection('section2')">
                <img
                    :src="require(`@/assets/img/index1-0/scroll.png`)"
                    alt=""
                />
            </button>
        </div>
        <div class="section2" ref="section2">
            <div
                class="bg"
                :style="{
                    'background-image':
                        'url(' + require(`@/assets/img/index1-1/bg.jpg`) + ')',
                }"
            >
                <div class="logo">
                    <img
                        class="flash reveal-function-900"
                        :src="require(`@/assets/img/index1-1/flash.png`)"
                        alt=""
                    />
                    <img
                        :src="require(`@/assets/img/index1-1/logo.png`)"
                        alt=""
                    />
                </div>
                <img
                    class="title reveal-top-300"
                    :src="require(`@/assets/img/index1-1/title.png`)"
                    alt=""
                />
                <img
                    class="powder reveal-left-600"
                    :src="require(`@/assets/img/index1-1/powder.png`)"
                    alt=""
                />
            </div>
            <button
                class="scroll-btn small"
                @click="scrollToSection('section3')"
            >
                <img
                    :src="require(`@/assets/img/index1-1/scroll.png`)"
                    alt=""
                />
            </button>
        </div>
        <div class="section3" ref="section3">
            <div class="flex-box">
                <img
                    class="col25"
                    :src="require(`@/assets/img/index1-0/01.jpg`)"
                    alt=""
                />
                <img
                    class="col25"
                    :src="require(`@/assets/img/index1-0/02.jpg`)"
                    alt=""
                />
                <img
                    class="col25"
                    :src="require(`@/assets/img/index1-0/03.jpg`)"
                    alt=""
                />
                <img
                    class="col25"
                    :src="require(`@/assets/img/index1-0/04.jpg`)"
                    alt=""
                />
            </div>
            <div class="black-field">
                <div class="lightbox">
                    <button class="close-btn">X</button>
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide>
                        <swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide>
                        <swiper-slide>Slide 5</swiper-slide>
                        <swiper-slide>Slide 6</swiper-slide>
                        <swiper-slide>Slide 7</swiper-slide>
                        <swiper-slide>Slide 8</swiper-slide>
                        <swiper-slide>Slide 9</swiper-slide>
                        <swiper-slide>Slide 10</swiper-slide>
                        <div
                            class="swiper-button-prev"
                            slot="button-prev"
                        ></div>
                        <div
                            class="swiper-button-next"
                            slot="button-next"
                        ></div>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="section4">
            <div
                class="bg"
                :style="{
                    'background-image':
                        'url(' + require(`@/assets/img/index1-3/bg.png`) + ')',
                }"
            >
                <img
                    class="title reveal-right-300"
                    :src="require(`@/assets/img/index1-3/title.png`)"
                    alt=""
                />
                <img
                    class="powder reveal-right-300"
                    :src="require(`@/assets/img/index1-3/powder.png`)"
                    alt=""
                />
                <img
                    class="paper reveal-bottom-600 reveal-function-custom-600"
                    :src="require(`@/assets/img/index1-3/paper.png`)"
                    alt=""
                />
                <div ref="bubble-box" class="bubble-box">
                    <img
                        class="bubble1"
                        :src="require(`@/assets/img/index1-3/bubble1.png`)"
                        alt=""
                    />
                    <img
                        class="bubble2"
                        :src="require(`@/assets/img/index1-3/bubble2.png`)"
                        alt=""
                    />
                    <img
                        class="bubble3"
                        :src="require(`@/assets/img/index1-3/bubble3.png`)"
                        alt=""
                    />
                    <img
                        class="bubble4"
                        :src="require(`@/assets/img/index1-3/bubble4.png`)"
                        alt=""
                    />
                    <img
                        class="bubble5"
                        :src="require(`@/assets/img/index1-3/bubble5.png`)"
                        alt=""
                    />
                    <img
                        class="bubble6"
                        :src="require(`@/assets/img/index1-3/bubble6.png`)"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div class="section5">
            <div
                class="bg"
                :style="{
                    'background-image':
                        'url(' + require(`@/assets/img/index1-4/bg.png`) + ')',
                }"
            >
                <img
                    class="title1 reveal-left-300"
                    :src="require(`@/assets/img/index1-4/title1.png`)"
                    alt=""
                />
                <img
                    class="title2 reveal-top-600"
                    :src="require(`@/assets/img/index1-4/title2.png`)"
                    alt=""
                />
                <img
                    class="powder reveal-top-900"
                    :src="require(`@/assets/img/index1-4/powder.png`)"
                    alt=""
                />
            </div>
        </div>
        <div class="section6">
            <div class="question-box">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-5/1-5-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-5/1-5-R.png`) +
                            ')',
                    }"
                ></div>
            </div>
        </div>
        <div class="section7">
            <div class="question-box">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-6/1-6-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-6/1-6-R.png`) +
                            ')',
                    }"
                ></div>
            </div>
        </div>
        <div class="section8">
            <div class="question-box">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-7/1-7-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-7/1-7-R.png`) +
                            ')',
                    }"
                ></div>
            </div>
        </div>
        <div class="section9">
            <div class="question-box">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-8/1-8-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer reveal-right-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-8/1-8-R.png`) +
                            ')',
                    }"
                ></div>
            </div>
        </div>
        <div class="section10">
            <div
                class="bg"
                :style="{
                    'background-image':
                        'url(' + require(`@/assets/img/index1-9/bg.png`) + ')',
                }"
            >
                <img
                    class="title"
                    :src="require(`@/assets/img/index1-9/title.png`)"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>
<script>
import scrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

const loadingSecond = 100;

export default {
    name: "HomeComponent",
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        msg: String,
    },
    data() {
        return {
            scrollReveal: scrollReveal(),
            swiperOption: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        };
    },
    mounted() {
        setTimeout(() => {
            this.setScrollRevealCustomFunction(600, this.$refs["bubble-box"]);
        }, loadingSecond);
    },
    methods: {
        scrollToSection(sessionName) {
            this.$refs[sessionName].scrollIntoView({ behavior: "smooth" });
        },
        setScrollRevealCustomFunction(time, el) {
            this.scrollReveal.reveal(`.reveal-function-custom-${time}`, {
                delay: time,
                afterReveal: () => {
                    el.classList.add("animating");
                },
                viewFactor: 1,
            });
        },
    },
    filters: {},
};
</script>
<style scoped lang="scss" src="./index.scss"></style>
