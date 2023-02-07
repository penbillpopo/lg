<template>
    <div class="nav">
        <router-link to="/" @click.native="reload()">
            <img class="logo" :src="require(`@/assets/img/logo.png`)" alt="" />
        </router-link>
        <div
            class="hamburger"
            :class="{ active: isMenuOpen }"
            @click="menuOpen(!isMenuOpen)"
        >
            <div class="line l1"></div>
            <div class="line l2"></div>
            <p class="title">主選單</p>
        </div>
        <div class="black-field" v-show="isMenuOpen">
            <div class="option-box">
                <router-link to="/" class="option" @click.native="reload()">
                    <p>Fiji 韓式洗衣新革命</p>
                </router-link>
                <router-link
                    to="/share"
                    class="option"
                    @click.native="reload()"
                >
                    <p>分享抽LG洗衣機</p>
                </router-link>
                <router-link
                    to="/share#mamibuy"
                    class="option"
                    @click.native="reload()"
                >
                    <p>百人親身好評見證</p>
                </router-link>
                <router-link
                    to="/market"
                    class="option"
                    @click.native="reload()"
                >
                    <p>立即購買</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "navComponent",
    props: ["location"],
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        menuOpen(open) {
            this.isMenuOpen = open;
        },
        reload() {
            window.history.go(-1);
            window.location.reload();
        },
    },
};
</script>
<style scoped lang="scss" src="./nav.scss"></style>
