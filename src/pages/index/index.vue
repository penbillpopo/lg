<template>
    <div class="container" ref="container">
        <navComponent v-if="!lightBoxShow" location="home"></navComponent>
        <div class="section1">
            <div class="flex-box pc-flex">
                <div class="frame ani">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/01.jpg`) +
                                ')',
                        }"
                    ></div>
                </div>
                <div class="frame ani delay-1">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/02.jpg`) +
                                ')',
                        }"
                    ></div>
                </div>
                <div class="frame ani delay-2">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/03.jpg`) +
                                ')',
                        }"
                    ></div>
                </div>
                <div class="frame ani delay-3">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/04.jpg`) +
                                ')',
                        }"
                    ></div>
                </div>
            </div>
            <div class="flex-box mobile-flex">
                <div class="frame ani">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/mobile/item_1.png`) +
                                ')',
                        }"
                    >
                        <img
                            :src="
                                require(`@/assets/img/index1-0/mobile/item_11.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <div class="frame ani delay-1">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/mobile/item_2.png`) +
                                ')',
                        }"
                    >
                        <img
                            :src="
                                require(`@/assets/img/index1-0/mobile/item_22.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <div class="frame ani delay-2">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/mobile/item_3.png`) +
                                ')',
                        }"
                    >
                        <img
                            :src="
                                require(`@/assets/img/index1-0/mobile/item_33.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <div class="frame ani delay-3">
                    <div
                        class="img"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-0/mobile/item_4.png`) +
                                ')',
                        }"
                    >
                        <img
                            :src="
                                require(`@/assets/img/index1-0/mobile/item_44.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <button class="scroll-btn" @click="scrollToSection(2)">
                <img
                    :src="require(`@/assets/img/index1-0/scroll.png`)"
                    alt=""
                />
            </button>
        </div>
        <div class="section2" ref="section2">
            <div class="bg">
                <div class="nav-box">
                    <router-link to="/" @click.native="$router.go()">
                        <img
                            :src="require(`@/assets/img/index1-1/nav-1.png`)"
                            alt=""
                        />
                    </router-link>
                    <router-link
                        to="/share#step"
                        class="option"
                        @click.native="$router.go()"
                    >
                        <img
                            :src="require(`@/assets/img/index1-1/nav-2.png`)"
                            alt=""
                        />
                    </router-link>
                    <router-link
                        to="/share#fb"
                        class="option"
                        @click.native="$router.go()"
                    >
                        <img
                            :src="require(`@/assets/img/index1-1/nav-3.png`)"
                            alt=""
                        />
                    </router-link>
                    <router-link
                        to="/market"
                        class="option"
                        @click.native="$router.go()"
                    >
                        <img
                            :src="require(`@/assets/img/index1-1/nav-4.png`)"
                            alt=""
                        />
                    </router-link>
                </div>
                <div class="logo">
                    <img
                        class="flash"
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
                    class="powder reveal-left-600 pc-inline-block"
                    :src="require(`@/assets/img/index1-1/powder.png`)"
                    alt=""
                />
                <img
                    class="powder reveal-left-600 mobile-inline-block"
                    :src="require(`@/assets/img/index1-1/mobile/powder.png`)"
                    alt=""
                />
                <img
                    class="light l1"
                    :src="require(`@/assets/img/index1-1/light2.png`)"
                    alt=""
                />
                <img
                    class="light l2"
                    :src="require(`@/assets/img/index1-1/light2.png`)"
                    alt=""
                />
                <img
                    class="light l3"
                    :src="require(`@/assets/img/index1-1/light2.png`)"
                    alt=""
                />
                <img
                    class="light l4"
                    :src="require(`@/assets/img/index1-1/light2.png`)"
                    alt=""
                />
                <img
                    class="light l5"
                    :src="require(`@/assets/img/index1-1/light2.png`)"
                    alt=""
                />
                <img
                    class="light l6"
                    :src="require(`@/assets/img/index1-1/light2.png`)"
                    alt=""
                />
                <img
                    class="light l7"
                    :src="require(`@/assets/img/index1-1/light2.png`)"
                    alt=""
                />
            </div>
            <button class="scroll-btn small" @click="scrollToSection(3)">
                <img
                    :src="require(`@/assets/img/index1-1/scroll.png`)"
                    alt=""
                />
            </button>
        </div>
        <div class="section3" ref="section3">
            <div class="flex-box pc-flex">
                <img
                    class="title reveal-top-1600"
                    :src="require(`@/assets/img/index1-2/title.png`)"
                    alt=""
                />
                <div
                    class="col25 reveal-bottom-0 pic-box"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic pc-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/01.png`) +
                                ')',
                        }"
                    ></div>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng1.png`)"
                        alt=""
                    />
                </div>
                <div
                    class="col25 reveal-bottom-400 pic-box"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic pc-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/02.png`) +
                                ')',
                        }"
                    ></div>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng2.png`)"
                        alt=""
                    />
                </div>
                <div
                    class="col25 reveal-bottom-800 pic-box"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic pc-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/03.png`) +
                                ')',
                        }"
                    ></div>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng3.png`)"
                        alt=""
                    />
                </div>
                <div
                    class="col25 reveal-bottom-1200 pic-box"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic pc-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/04.png`) +
                                ')',
                        }"
                    ></div>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng4.png`)"
                        alt=""
                    />
                </div>
            </div>
            <div class="flex-box mobile-flex">
                <img
                    class="title reveal-top-1600"
                    :src="require(`@/assets/img/index1-2/title.png`)"
                    alt=""
                />
                <div
                    class="col25 reveal-bottom-0 pic-box big"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic mobile-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/mobile/01.png`) +
                                ')',
                        }"
                    >
                        <img
                            class="ng"
                            :src="
                                require(`@/assets/img/index1-2/mobile/4ng.png`)
                            "
                            alt=""
                        />
                    </div>

                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng1.png`)"
                        alt=""
                    />
                    <img
                        class="first-arrow"
                        :src="require(`@/assets/img/index1-2/arrow.png`)"
                        alt=""
                    />
                </div>
                <div
                    class="col25 reveal-bottom-400 pic-box"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic mobile-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/mobile/02.png`) +
                                ')',
                        }"
                    ></div>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng2.png`)"
                        alt=""
                        @click="lightBoxOpen(true)"
                    />
                    <img
                        class="arrow"
                        :src="require(`@/assets/img/index1-2/arrow.png`)"
                        alt=""
                    />
                </div>
                <div
                    class="col25 reveal-bottom-800 pic-box"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic mobile-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/mobile/03.png`) +
                                ')',
                        }"
                    ></div>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng3.png`)"
                        alt=""
                        @click="lightBoxOpen(true)"
                    />
                    <img
                        class="arrow"
                        :src="require(`@/assets/img/index1-2/arrow.png`)"
                        alt=""
                    />
                </div>
                <div
                    class="col25 reveal-bottom-1200 pic-box"
                    @click="lightBoxOpen(true)"
                >
                    <div
                        class="pic mobile-inline-block"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/mobile/04.png`) +
                                ')',
                        }"
                    ></div>
                    <img
                        class="btn"
                        :src="require(`@/assets/img/index1-2/ng4.png`)"
                        alt=""
                        @click="lightBoxOpen(true)"
                    />
                    <img
                        class="arrow"
                        :src="require(`@/assets/img/index1-2/arrow.png`)"
                        alt=""
                    />
                </div>
            </div>
            <div class="black-field" v-if="lightBoxShow">
                <button class="close-btn" @click="lightBoxOpen(false)">
                    <img
                        :src="
                            require(`@/assets/img/index1-2/light-box/close.png`)
                        "
                        alt=""
                    />
                </button>
                <div class="lightbox">
                    <div
                        class="frame"
                        :style="{
                            'background-image':
                                'url(' +
                                require(`@/assets/img/index1-2/light-box/circle_bg2.png`) +
                                ')',
                        }"
                    >
                        <div class="inner">
                            <swiper class="swiper" :options="swiperOption3">
                                <swiper-slide>
                                    <img
                                        :src="
                                            require(`@/assets/img/index1-2/light-box/1-2-1.png`)
                                        "
                                        alt=""
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        :src="
                                            require(`@/assets/img/index1-2/light-box/1-2-2.png`)
                                        "
                                        alt=""
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        :src="
                                            require(`@/assets/img/index1-2/light-box/1-2-3.png`)
                                        "
                                        alt=""
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        :src="
                                            require(`@/assets/img/index1-2/light-box/1-2-4.png`)
                                        "
                                        alt=""
                                    />
                                </swiper-slide>
                                <swiper-slide>
                                    <img
                                        :src="
                                            require(`@/assets/img/index1-2/light-box/1-2-5.png`)
                                        "
                                        alt=""
                                    />
                                    <img
                                        class="btn"
                                        @click="section3LightBoxClick()"
                                        :src="
                                            require(`@/assets/img/index1-2/light-box/1-2-5-btn.png`)
                                        "
                                        alt=""
                                    />
                                </swiper-slide>
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
            </div>
        </div>
        <div class="section4" ref="section4">
            <div class="bg">
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
                    class="paper"
                    :src="require(`@/assets/img/index1-3/paper.png`)"
                    alt=""
                />
                <div ref="section4-ani" class="bubble-box">
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
        <div class="section5" ref="section5">
            <div class="bg">
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
                    class="powder"
                    :src="require(`@/assets/img/index1-4/powder.png`)"
                    alt=""
                />
            </div>
        </div>
        <div class="section6">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-5/1-5-L.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <img
                            class="title-L-1 reveal-left-800"
                            :src="
                                require(`@/assets/img/index1-5/elements/title-L-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="title-L-2 reveal-left-1000"
                            :src="
                                require(`@/assets/img/index1-5/elements/title-L-2.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-5/pc-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-5/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-5/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-5/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box">
                            <img
                                class="pic-R-1 reveal-right-2100"
                                :src="
                                    require(`@/assets/img/index1-5/elements/pic-R-1.png`)
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-5/1-5-L-mobile.png`) +
                            ')',
                    }"
                >
                    <img
                        class="title-L-1 reveal-left-800"
                        :src="
                            require(`@/assets/img/index1-5/elements/title-L-1.png`)
                        "
                        alt=""
                    />
                    <img
                        class="title-L-2 reveal-left-1000"
                        :src="
                            require(`@/assets/img/index1-5/elements/title-L-2.png`)
                        "
                        alt=""
                    />
                </div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-5/mobile-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-5/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-5/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-5/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box">
                            <img
                                class="pic-R-1 reveal-right-2100"
                                :src="
                                    require(`@/assets/img/index1-5/elements/pic-R-1.png`)
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section7">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-6/1-6-L.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <img
                            class="title-L-1 reveal-left-800"
                            :src="
                                require(`@/assets/img/index1-6/elements/title-L-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="title-L-2 reveal-left-1000"
                            :src="
                                require(`@/assets/img/index1-6/elements/title-L-2.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-6/pc-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-6/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-6/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-6/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box reveal-right-2100">
                            <img
                                class="pic-R-1"
                                :src="
                                    require(`@/assets/img/index1-6/elements/pic-R-1.png`)
                                "
                                alt=""
                            />
                        </div>
                    </div>
                    <img
                        class="response"
                        :src="
                            require(`@/assets/img/index1-6/elements/response.png`)
                        "
                        alt=""
                    />
                </div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-6/1-6-L-mobile.png`) +
                            ')',
                    }"
                >
                    <img
                        class="title-L-1 reveal-left-800"
                        :src="
                            require(`@/assets/img/index1-6/elements/title-L-1.png`)
                        "
                        alt=""
                    />
                    <img
                        class="title-L-2 reveal-left-1000"
                        :src="
                            require(`@/assets/img/index1-6/elements/title-L-2-m.png`)
                        "
                        alt=""
                    />
                </div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-6/mobile-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-6/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-6/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-6/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box reveal-right-2100">
                            <img
                                class="pic-R-1"
                                :src="
                                    require(`@/assets/img/index1-6/elements/pic-R-1.png`)
                                "
                                alt=""
                            />
                        </div>
                    </div>
                    <img
                        class="response"
                        :src="
                            require(`@/assets/img/index1-6/elements/response.png`)
                        "
                        alt=""
                    />
                </div>
            </div>
        </div>
        <div class="section8">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-7/1-7-L.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <img
                            class="title-L-1 reveal-left-800"
                            :src="
                                require(`@/assets/img/index1-7/elements/title-L-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="title-L-2 reveal-left-1000"
                            :src="
                                require(`@/assets/img/index1-7/elements/title-L-2.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-7/pc-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-7/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-7/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-7/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box reveal-right-2100">
                            <div class="left"></div>
                            <div class="right">
                                <div class="top">
                                    <img
                                        class="pic-R-1"
                                        :src="
                                            require(`@/assets/img/index1-7/elements/pic-R-1.png`)
                                        "
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-7/1-7-L-mobile.png`) +
                            ')',
                    }"
                >
                    <img
                        class="title-L-1 reveal-left-800"
                        :src="
                            require(`@/assets/img/index1-7/elements/title-L-1.png`)
                        "
                        alt=""
                    />
                    <img
                        class="title-L-2 reveal-left-1000"
                        :src="
                            require(`@/assets/img/index1-7/elements/title-L-2.png`)
                        "
                        alt=""
                    />
                </div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-7/mobile-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-7/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-7/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-7/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box reveal-right-2100">
                            <div class="left"></div>
                            <div class="right">
                                <div class="top">
                                    <img
                                        class="pic-R-1"
                                        :src="
                                            require(`@/assets/img/index1-7/elements/pic-R-1.png`)
                                        "
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section9">
            <div class="question-box pc-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-8/1-8-L.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <img
                            class="title-L-1 reveal-left-800"
                            :src="
                                require(`@/assets/img/index1-8/elements/title-L-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="title-L-2 reveal-left-1000"
                            :src="
                                require(`@/assets/img/index1-8/elements/title-L-2.png`)
                            "
                            alt=""
                        />
                    </div>
                </div>
                <div
                    class="answer reveal-right-600"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-8/pc-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-8/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-8/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-8/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box reveal-right-2100">
                            <img
                                class="pic-R-1"
                                :src="
                                    require(`@/assets/img/index1-8/elements/pic-R-1.png`)
                                "
                                alt=""
                            />
                            <img
                                class="pic-R-2"
                                :src="
                                    require(`@/assets/img/index1-8/elements/pic-R-2.png`)
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="question-box mobile-flex">
                <div
                    class="question reveal-left-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-8/1-8-L-mobile.png`) +
                            ')',
                    }"
                >
                    <img
                        class="title-L-1 reveal-left-800"
                        :src="
                            require(`@/assets/img/index1-8/elements/title-L-1.png`)
                        "
                        alt=""
                    />
                    <img
                        class="title-L-2 reveal-left-1000"
                        :src="
                            require(`@/assets/img/index1-8/elements/title-L-2.png`)
                        "
                        alt=""
                    />
                </div>
                <div
                    class="answer reveal-right-300"
                    :style="{
                        'background-image':
                            'url(' +
                            require(`@/assets/img/index1-8/mobile-R.png`) +
                            ')',
                    }"
                >
                    <div class="frame">
                        <div class="title-box reveal-right-1200">
                            <img
                                class="title-R"
                                :src="
                                    require(`@/assets/img/index1-8/elements/title-R.png`)
                                "
                                alt=""
                            />
                        </div>
                        <img
                            class="text-R-1 reveal-right-1500"
                            :src="
                                require(`@/assets/img/index1-8/elements/text-R-1.png`)
                            "
                            alt=""
                        />
                        <img
                            class="text-R-2 reveal-right-1800"
                            :src="
                                require(`@/assets/img/index1-8/elements/text-R-2.png`)
                            "
                            alt=""
                        />
                        <div class="pic-box reveal-right-2100">
                            <img
                                class="pic-R-1"
                                :src="
                                    require(`@/assets/img/index1-8/elements/pic-R-1.png`)
                                "
                                alt=""
                            />
                            <img
                                class="pic-R-2"
                                :src="
                                    require(`@/assets/img/index1-8/elements/pic-R-2.png`)
                                "
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section10">
            <div class="bg">
                <div class="video-box">
                    <a
                        class="video"
                        href="https://www.youtube.com/watch?v=WviQZvbizGQ"
                        data-fancybox
                    >
                        <div
                            class="pic reveal-left-300"
                            :style="{
                                'background-image':
                                    'url(' +
                                    require(`@/assets/img/index1-9/video_2.png`) +
                                    ')',
                            }"
                        >
                            <img
                                class="title"
                                :src="
                                    require(`@/assets/img/index1-9/title.png`)
                                "
                                alt=""
                            />
                            <img
                                class="play-btn"
                                :src="
                                    require(`@/assets/img/index1-9/playBtn.png`)
                                "
                            />
                            <img
                                class="text"
                                :src="
                                    require(`@/assets/img/index1-9/txt_1.png`)
                                "
                                alt=""
                            />
                        </div>
                    </a>
                    <!-- <div class="video">
                        <div
                            class="pic"
                            :style="{
                                'background-image':
                                    'url(' +
                                    require(`@/assets/img/index1-9/video_2.png`) +
                                    ')',
                            }"
                        ></div>
                        <img
                            class="text"
                            :src="require(`@/assets/img/index1-9/txt_2.png`)"
                            alt=""
                        />
                    </div>
                    <div class="video">
                        <div
                            class="pic"
                            :style="{
                                'background-image':
                                    'url(' +
                                    require(`@/assets/img/index1-9/video_3.png`) +
                                    ')',
                            }"
                        ></div>
                        <img
                            class="text"
                            :src="require(`@/assets/img/index1-9/txt_3.png`)"
                            alt=""
                        />
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navComponent from "../../component/nav/nav.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
    name: "TempComponent",
    components: {
        Swiper,
        SwiperSlide,
        navComponent,
    },
    data() {
        return {
            swiperOption3: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            swiperOption10: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    1280: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            },
            lightBoxShow: false,
            tempScrollOffset: "",
            isScrollStop: false,
        };
    },
    created() {},
    mounted() {
        const _this = this;
        this.$nextTick(function () {
            setTimeout(() => {
                window.scrollTo(0, 0);
                this.$refs["container"].classList.add("active");
                window.addEventListener(
                    "scroll",
                    () => {
                        _this.sectionScroll();
                    },
                    false
                );
                this.sectionScroll();
            }, 200);
        });
    },
    methods: {
        sectionScroll() {
            if (this.isScrollStop) {
                window.scrollTo(0, this.tempScrollOffset);
                return;
            }
            let percentage =
                Math.round(
                    (window.pageYOffset /
                        (document.body.offsetHeight - window.innerHeight)) *
                        10
                ) + 1;
            if (percentage <= 11) {
                if (percentage === 11) {
                    percentage = 10;
                }
                if (
                    this.$refs["container"] &&
                    !this.$refs["container"].classList.contains(
                        `animate-${percentage}`
                    )
                ) {
                    for (let i = 1; i <= 10; i++) {
                        this.$refs["container"].classList.remove(
                            `animate-${i}`
                        );
                    }
                    this.$refs["container"].classList.add(
                        "container",
                        `animate-${percentage}`
                    );
                    this.isScrollStop = true;
                    this.tempScrollOffset = window.scrollY;
                    setTimeout(() => {
                        this.isScrollStop = false;
                    }, 1000);
                }
            }
        },
        scrollToSection(session) {
            const offset = 15;
            window.scrollTo(0, (window.innerHeight / 20) * session + offset);
        },
        lightBoxOpen(isOpen) {
            this.lightBoxShow = isOpen;
        },
        section3LightBoxClick() {
            this.lightBoxShow = false;
            this.scrollToSection(5);
        },
    },
    filters: {},
};
</script>
<style scoped lang="scss" src="./index.scss"></style>
