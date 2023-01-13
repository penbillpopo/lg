const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/scss/_load.scss";`,
            },
            scss: {
                additionalData: `@import "@/assets/scss/_load.scss";`,
            },
        },
    },
});
