<template>
    <div class="nav">
        <router-link to="/">
            <img class="logo" :src="require(`@/assets/img/logo.png`)" alt="" />
        </router-link>
        <div class="hamburger" v-if="!isMenuOpen" @click="menuOpen(true)">
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="black-field" v-else>
            <button class="close-btn" @click="menuOpen(false)">
                <img
                    :src="require(`@/assets/img/index1-2/light-box/close.png`)"
                    alt=""
                />
            </button>
            <div class="option-box">
                <router-link to="/" class="option">
                    <p>LG Fiji 韓式洗衣新革命</p>
                </router-link>
                <router-link to="/share" class="option">
                    <p>分享抽LG洗衣機</p>
                </router-link>
                <router-link to="/share#fb" class="option">
                    <p>百人親身好評見證</p>
                </router-link>
                <router-link to="/market" class="option">
                    <p>立即購買</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "navComponent",
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        menuOpen(open) {
            this.isMenuOpen = open;
        },
    },
};
</script>
<style scoped lang="scss" src="./nav.scss"></style>
