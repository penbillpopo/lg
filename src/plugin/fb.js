export const initFacebook = () => {
    window.fbAsyncInit = function () {
        /* global FB */
        FB.init({
            appId: "935058840744913",
            cookie: true,
            xfbml: true,
            version: "v11.0",
        });
        FB.AppEvents.logPageView();
    };
};
