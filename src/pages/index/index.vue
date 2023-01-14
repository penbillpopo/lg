<template>
    <div class="container">
        <div class="section1">
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
            <div class="flex-box mobile">
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
        <div class="section2">
            <div
                class="bg"
                :style="{
                    'background-image':
                        'url(' + require(`@/assets/img/index1-1/bg.jpg`) + ')',
                }"
            ></div>
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
            ></div>
        </div>
        <div class="section5">
            <div
                class="bg"
                :style="{
                    'background-image':
                        'url(' + require(`@/assets/img/index1-4/bg.png`) + ')',
                }"
            ></div>
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
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeComponent",
    props: {
        msg: String,
    },
    data() {
        return {
            sectionOneImgs: ["@/assets/img/index1-0/01.jpg"],
        };
    },
    created() {},
    methods: {},
    filters: {},
};
</script>
<style scoped lang="scss" src="./index.scss"></style>
