<template>
    <div class="container">
        <navComponent></navComponent>
        <div class="section1">
            <div class="flex-box pc-flex">
                <img class="col25 ani" :src="require(`@/assets/img/index1-0/01.jpg`)" alt="" />
                <img class="col25 ani delay-1" :src="require(`@/assets/img/index1-0/02.jpg`)" alt="" />
                <img class="col25 ani delay-2" :src="require(`@/assets/img/index1-0/03.jpg`)" alt="" />
                <img class="col25 ani delay-3" :src="require(`@/assets/img/index1-0/04.jpg`)" alt="" />
            </div>
            <div class="flex-box mobile-flex">
                <img class="col25 ani" :src="require(`@/assets/img/index1-0/mobile/01.jpg`)" alt="" />
                <img class="col25 ani delay-1" :src="require(`@/assets/img/index1-0/mobile/02.jpg`)" alt="" />
                <img class="col25 ani delay-2" :src="require(`@/assets/img/index1-0/mobile/03.jpg`)" alt="" />
                <img class="col25 ani delay-3" :src="require(`@/assets/img/index1-0/mobile/04.jpg`)" alt="" />
            </div>
            <button class="scroll-btn" @click="scrollToSection('section2')">
                <img :src="require(`@/assets/img/index1-0/scroll.png`)" alt="" />
            </button>
        </div>
        <div class="section2" ref="section2">
            <div class="bg">
                <div class="logo">
                    <img class="flash reveal-function-900" :src="require(`@/assets/img/index1-1/flash.png`)" alt="" />
                    <img :src="require(`@/assets/img/index1-1/logo.png`)" alt="" />
                </div>
                <img class="title reveal-top-300" :src="require(`@/assets/img/index1-1/title.png`)" alt="" />
                <img
                    class="powder reveal-left-600 pc-inline-block"
                    :src="require(`@/assets/img/index1-1/powder.png`)"
                    alt="" />
                <img
                    class="powder reveal-left-600 mobile-inline-block"
                    :src="require(`@/assets/img/index1-1/mobile/powder.png`)"
                    alt="" />
                <img class="light l1" :src="require(`@/assets/img/index1-1/light2.png`)" alt="" />
                <img class="light l2" :src="require(`@/assets/img/index1-1/light2.png`)" alt="" />
                <img class="light l3" :src="require(`@/assets/img/index1-1/light2.png`)" alt="" />
                <img class="light l4" :src="require(`@/assets/img/index1-1/light2.png`)" alt="" />
                <img class="light l5" :src="require(`@/assets/img/index1-1/light2.png`)" alt="" />
                <img class="light l6" :src="require(`@/assets/img/index1-1/light2.png`)" alt="" />
                <img class="light l7" :src="require(`@/assets/img/index1-1/light2.png`)" alt="" />
            </div>
            <button class="scroll-btn small" @click="scrollToSection('section3')">
                <img :src="require(`@/assets/img/index1-1/scroll.png`)" alt="" />
            </button>
        </div>
        <div class="section3" ref="section3">
            <div class="flex-box">
                <img class="title reveal-top-1600" :src="require(`@/assets/img/index1-2/title.png`)" alt="" />
                <div class="col25 reveal-bottom-0 pic-box">
                    <img class="pic pc-inline-block" :src="require(`@/assets/img/index1-2/01.png`)" alt="" />
                    <img class="pic mobile-inline-block" :src="require(`@/assets/img/index1-2/mobile/01.png`)" alt="" />
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng1.png`)"
                        alt=""
                        @click="lightBoxOpen(true)" />
                </div>
                <div class="col25 reveal-bottom-400 pic-box">
                    <img class="pic pc-inline-block" :src="require(`@/assets/img/index1-2/02.png`)" alt="" />
                    <img class="pic mobile-inline-block" :src="require(`@/assets/img/index1-2/mobile/02.png`)" alt="" />
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng2.png`)"
                        alt=""
                        @click="lightBoxOpen(true)" />
                </div>
                <div class="col25 reveal-bottom-800 pic-box">
                    <img class="pic pc-inline-block" :src="require(`@/assets/img/index1-2/03.png`)" alt="" />
                    <img class="pic mobile-inline-block" :src="require(`@/assets/img/index1-2/mobile/03.png`)" alt="" />
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng3.png`)"
                        alt=""
                        @click="lightBoxOpen(true)" />
                </div>
                <div class="col25 reveal-bottom-1200 pic-box">
                    <img class="pic pc-inline-block" :src="require(`@/assets/img/index1-2/04.png`)" alt="" />
                    <img class="pic mobile-inline-block" :src="require(`@/assets/img/index1-2/mobile/04.png`)" alt="" />
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng4.png`)"
                        alt=""
                        @click="lightBoxOpen(true)" />
                </div>
            </div>
            <div class="black-field" v-if="lightBoxShow">
                <button class="close-btn" @click="lightBoxOpen(false)">
                    <img :src="require(`@/assets/img/index1-2/light-box/close.png`)" alt="" />
                </button>
                <div class="lightbox">
                    <div
                        class="frame"
                        :style="{
                            'background-image':
                                'url(' + require(`@/assets/img/index1-2/light-box/circle_bg2.png`) + ')',
                        }">
                        <div class="inner">
                            <swiper class="swiper" :options="swiperOption3">
                                <swiper-slide>
                                    <img :src="require(`@/assets/img/index1-2/light-box/1-2-1.png`)" alt="" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img :src="require(`@/assets/img/index1-2/light-box/1-2-2.png`)" alt="" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img :src="require(`@/assets/img/index1-2/light-box/1-2-3.png`)" alt="" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img :src="require(`@/assets/img/index1-2/light-box/1-2-4.png`)" alt="" />
                                </swiper-slide>
                                <swiper-slide>
                                    <img :src="require(`@/assets/img/index1-2/light-box/1-2-5.png`)" alt="" />
                                    <img
                                        class="btn"
                                        @click="section3LightBoxClick()"
                                        :src="require(`@/assets/img/index1-2/light-box/1-2-5-btn.png`)"
                                        alt="" />
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section4" ref="section4">
            <div class="bg">
                <img class="title reveal-right-300" :src="require(`@/assets/img/index1-3/title.png`)" alt="" />
                <img class="powder reveal-right-300" :src="require(`@/assets/img/index1-3/powder.png`)" alt="" />
                <img
                    class="paper reveal-bottom-600 reveal-function-section4-600"
                    :src="require(`@/assets/img/index1-3/paper.png`)"
                    alt="" />
                <div ref="section4-ani" class="bubble-box">
                    <img class="bubble1" :src="require(`@/assets/img/index1-3/bubble1.png`)" alt="" />
                    <img class="bubble2" :src="require(`@/assets/img/index1-3/bubble2.png`)" alt="" />
                    <img class="bubble3" :src="require(`@/assets/img/index1-3/bubble3.png`)" alt="" />
                    <img class="bubble4" :src="require(`@/assets/img/index1-3/bubble4.png`)" alt="" />
                    <img class="bubble5" :src="require(`@/assets/img/index1-3/bubble5.png`)" alt="" />
                    <img class="bubble6" :src="require(`@/assets/img/index1-3/bubble6.png`)" alt="" />
                </div>
            </div>
        </div>
        <div class="section5">
            <div class="bg">
                <img class="title1 reveal-left-300" :src="require(`@/assets/img/index1-4/title1.png`)" alt="" />
                <img class="title2 reveal-top-600" :src="require(`@/assets/img/index1-4/title2.png`)" alt="" />
                <img class="powder reveal-top-900" :src="require(`@/assets/img/index1-4/powder.png`)" alt="" />
            </div>
        </div>
        <div class="section6">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-5/1-5-L.png`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-5/1-5-R.png`) + ')',
                    }"></div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-5/1-5-L-mobile.jpg`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-5/1-5-R-mobile.jpg`) + ')',
                    }"></div>
            </div>
        </div>
        <div class="section7">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-6/1-6-L.png`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-6/1-6-R.png`) + ')',
                    }"></div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-6/1-6-L-mobile.jpg`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-6/1-6-R-mobile.jpg`) + ')',
                    }"></div>
            </div>
        </div>
        <div class="section8">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-7/1-7-L.png`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-7/1-7-R.png`) + ')',
                    }"></div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-7/1-7-L-mobile.jpg`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-7/1-7-R-mobile.jpg`) + ')',
                    }"></div>
            </div>
        </div>
        <div class="section9">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-8/1-8-L.png`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-8/1-8-R.png`) + ')',
                    }"></div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-8/1-8-L-mobile.jpg`) + ')',
                    }"></div>
                <div
                    class="answer reveal-right-300"
                    :style="{
                        'background-image': 'url(' + require(`@/assets/img/index1-8/1-8-R-mobile.jpg`) + ')',
                    }"></div>
            </div>
        </div>
        <div class="section10">
            <div class="bg">
                <img class="title reveal-left-300" :src="require(`@/assets/img/index1-9/title.png`)" alt="" />
                <div class="swiper-box pc">
                    <swiper class="swiper" :options="swiperOption10">
                        <swiper-slide>
                            <a href="http://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
                                <div
                                    class="pic"
                                    :style="{
                                        'background-image': 'url(' + require(`@/assets/img/index1-9/video_1.png`) + ')',
                                    }">
                                    <img class="play-btn" :src="require(`@/assets/img/index1-9/playBtn.png`)" />
                                </div>
                                <img class="text" :src="require(`@/assets/img/index1-9/txt_1.png`)" alt="" />
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="http://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
                                <div
                                    class="pic"
                                    :style="{
                                        'background-image': 'url(' + require(`@/assets/img/index1-9/video_2.png`) + ')',
                                    }">
                                    <img class="play-btn" :src="require(`@/assets/img/index1-9/playBtn.png`)" />
                                </div>
                                <img class="text" :src="require(`@/assets/img/index1-9/txt_2.png`)" alt="" />
                            </a>
                        </swiper-slide>
                        <swiper-slide>
                            <a href="http://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
                                <div
                                    class="pic"
                                    :style="{
                                        'background-image': 'url(' + require(`@/assets/img/index1-9/video_3.png`) + ')',
                                    }">
                                    <img class="play-btn" :src="require(`@/assets/img/index1-9/playBtn.png`)" />
                                </div>
                                <img class="text" :src="require(`@/assets/img/index1-9/txt_3.png`)" alt="" />
                            </a>
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="mobile">
                    <div class="frame top">
                        <a href="http://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
                            <div
                                class="pic"
                                :style="{
                                    'background-image': 'url(' + require(`@/assets/img/index1-9/video_1.png`) + ')',
                                }">
                                <img class="play-btn" :src="require(`@/assets/img/index1-9/playBtn.png`)" />
                            </div>
                            <img class="text" :src="require(`@/assets/img/index1-9/txt_1.png`)" alt="" />
                        </a>
                    </div>
                    <div class="frame center">
                        <a href="http://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
                            <div
                                class="pic"
                                :style="{
                                    'background-image': 'url(' + require(`@/assets/img/index1-9/video_2.png`) + ')',
                                }">
                                <img class="play-btn" :src="require(`@/assets/img/index1-9/playBtn.png`)" />
                            </div>
                            <img class="text" :src="require(`@/assets/img/index1-9/txt_2.png`)" alt="" />
                        </a>
                    </div>
                    <div class="frame bottom">
                        <a href="http://media.w3.org/2010/05/sintel/trailer.mp4" data-fancybox>
                            <div
                                class="pic"
                                :style="{
                                    'background-image': 'url(' + require(`@/assets/img/index1-9/video_3.png`) + ')',
                                }">
                                <img class="play-btn" :src="require(`@/assets/img/index1-9/playBtn.png`)" />
                            </div>
                            <img class="text" :src="require(`@/assets/img/index1-9/txt_3.png`)" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import scrollReveal from 'scrollreveal';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import navComponent from '../../component/nav/nav.vue';
const loadingSecond = 100;

export default {
    name: 'HomeComponent',
    components: {
        Swiper,
        SwiperSlide,
        navComponent,
    },
    props: {
        msg: String,
    },
    data() {
        return {
            scrollReveal: scrollReveal(),
            swiperOption3: {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            swiperOption10: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            lightBoxShow: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.setScrollRevealCustomFunction(600, 'section4', this.$refs['section4-ani']);
        }, loadingSecond);
    },
    methods: {
        scrollToSection(sessionName) {
            this.$refs[sessionName].scrollIntoView({ behavior: 'smooth' });
        },
        setScrollRevealCustomFunction(time, name, el) {
            this.scrollReveal.reveal(`.reveal-function-${name}-${time}`, {
                delay: time,
                afterReveal: () => {
                    el.classList.add('animating');
                },
                viewFactor: 1,
            });
        },
        lightBoxOpen(isOpen) {
            this.lightBoxShow = isOpen;
        },
        section3LightBoxClick() {
            this.lightBoxShow = false;
            this.scrollToSection('section4');
        },
    },
    filters: {},
};
</script>
<style scoped lang="scss" src="./index.scss"></style>
