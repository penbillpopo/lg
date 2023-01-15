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
        </div>
        <div class="section3">
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
                    class="title1"
                    :src="require(`@/assets/img/index1-4/title1.png`)"
                    alt=""
                />
                <img
                    class="title2"
                    :src="require(`@/assets/img/index1-4/title2.png`)"
                    alt=""
                />
                <img
                    class="powder"
                    :src="require(`@/assets/img/index1-4/powder.png`)"
                    alt=""
                />
            </div>
        </div>
        <div class="section6">
            <div class="question-box">
                <div
                    class="question"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-5/1-5-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer"
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
                    class="question"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-6/1-6-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer"
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
                    class="question"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-7/1-7-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer"
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
                    class="question"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-8/1-8-L.png`) +
                            ')',
                    }"
                ></div>
                <div
                    class="answer"
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
const loadingSecond = 100;

export default {
    name: "HomeComponent",
    props: {
        msg: String,
    },
    data() {
        return {
            scrollReveal: scrollReveal(),
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
