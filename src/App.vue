<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/img/logo.png" />
        <HomeComponent msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HomeComponent from "./pages/index/index.vue";

export default {
    name: "App",
    components: {
        HomeComponent,
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
