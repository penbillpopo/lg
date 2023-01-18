<template>
    <div class="container">
        <div class="page02">
            <div class="top-bg">
                <img
                    class="top-img pc"
                    :src="require(`@/assets/img/index2-1/index_2-1.png`)"
                    alt=""
                />
                <button class="share-btn" @click="lightBoxIntroOpen(true)">
                    <img
                        :src="require(`@/assets/img/index2-1/btn.png`)"
                        alt=""
                    />
                </button>
                <!-- Bubble -->
                <img
                    class="bubble-1"
                    :src="require(`@/assets/img/index2-1/93.png`)"
                    alt=""
                />
                <img
                    class="bubble-2"
                    :src="require(`@/assets/img/index2-1/95.png`)"
                    alt=""
                />
                <img
                    class="bubble-3"
                    :src="require(`@/assets/img/index2-1/96.png`)"
                    alt=""
                />
                <!-- Content sliders -->
                <img
                    class="share1"
                    :src="require(`@/assets/img/index2-1/txt_1-1.png`)"
                    alt=""
                />
                <img
                    class="share2"
                    :src="require(`@/assets/img/index2-1/txt_2-2.png`)"
                    alt=""
                />
                <img
                    class="share3"
                    :src="require(`@/assets/img/index2-1/txt_3-3.png`)"
                    alt=""
                />
                <img
                    class="share4"
                    :src="require(`@/assets/img/index2-1/txt_4-4.png`)"
                    alt=""
                />
                <!-- Add Facebook Share Button -->
                <button class="fb btn1" @click="lightBoxApplyOpen(true)">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtn.png`)"
                        alt=""
                    />
                </button>

                <button class="fb btn2" @click="lightBoxApplyOpen(true)">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtnM.png`)"
                        alt=""
                    />
                </button>
                <button class="fb btn3" @click="lightBoxApplyOpen(true)">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtnM.png`)"
                        alt=""
                    />
                </button>
                <button class="fb btn4" @click="lightBoxApplyOpen(true)">
                    <img
                        :src="require(`@/assets/img/index2-1/fbBtn.png`)"
                        alt=""
                    />
                </button>
                <a class="share-more" href=""
                    ><img
                        :src="
                            require(`@/assets/img/index2-1/btn-shareMore.png`)
                        "
                        alt=""
                /></a>
                <img
                    class="image1"
                    :src="require(`@/assets/img/index2-1/images1.png`)"
                    alt=""
                />
                <img
                    class="image2"
                    :src="require(`@/assets/img/index2-1/images2.png`)"
                    alt=""
                />
                <img
                    class="image3"
                    :src="require(`@/assets/img/index2-1/images3.png`)"
                    alt=""
                />
                <a href=""
                    ><img
                        class="like-btn"
                        :src="
                            require(`@/assets/img/index2-1/btn-likeItTonight.png`)
                        "
                        alt=""
                /></a>
                <img
                    class="image4"
                    :src="require(`@/assets/img/index2-1/images4.png`)"
                    alt=""
                />
                <img
                    class="image5"
                    :src="require(`@/assets/img/index2-1/images5.png`)"
                    alt=""
                />
                <!-- RWD part -->
                <img
                    class="mobile"
                    :src="require(`@/assets/img/index2-1/index_m_2.png`)"
                    alt=""
                />
            </div>
            <div class="black-field" v-if="lightBoxIntroShow">
                <button class="close-btn" @click="lightBoxIntroOpen(false)">
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
                                require(`@/assets/img/index2-1/light-box/circle_bg.png`) +
                                ')',
                        }"
                    >
                        <div class="content-box">
                            <p class="title">Fiji抽獎注意事項</p>
                            <div class="content">
                                <strong>活動期間</strong>
                                <p>即日起至 2023/3/10（五）。</p>
                                <strong>活動內容</strong>
                                <p>
                                    於活動期間內填寫姓名、電話、Email並分享「FiJi
                                    飛漬洗衣紙」媽咪拜愛用者好評心得至個人FB或IG，並設定公開，就有機會獲得「LG蒸氣滾筒洗衣機(蒸洗脫烘)
                                    冰磁白WD-S13VDW」。分享次數越多，中獎機率越高。
                                </p>
                                <strong> 獎項內容 </strong>
                                <p>
                                    1. LG蒸氣滾筒洗衣機(蒸洗脫烘)
                                    冰磁白WD-S13VDW 壹台，一名 (市價36,900元)。
                                </p>
                                <p>
                                    2. FiJi飛漬洗衣紙清新30抽六盒，三名
                                    (市價2,250元)。
                                </p>
                                <strong>活動辦法</strong>
                                <p>
                                    1. 於活動期間內至『FiJi 飛漬洗衣紙
                                    好評分享抽大獎』活動頁http://LG_Fiji.com.tw分享「FiJi
                                    飛漬洗衣紙」愛用者好評至個人FB或IG，並設定公開，即可參加抽獎。
                                </p>
                                <p>
                                    2.
                                    中獎者需保留FB或IG公開分享內容至2023/3/31（五），並於兌獎時提出畫面截圖（須顯示發文帳號及時間）供本公司活動小組進行核對，若無法提供者，即取消中獎資格。
                                </p>
                                <p>
                                    3.
                                    每位中獎者不得重複領獎，獎項以市價高者為優先贈予。
                                </p>
                                <strong>抽獎時間與中獎公告</strong>
                                <p>
                                    1.
                                    中獎名單將由電腦隨機抽出，並於<span>2023/3/20(一)</span>公佈於LG生活健康FB粉絲專頁
                                    <a
                                        target="blank"
                                        href="https://www.facebook.com/lglife"
                                        >https://www.facebook.com/lglife</a
                                    >
                                    ，及E-mail寄出中獎通知信給中獎者。中獎者收到電子郵件後，請依郵件內容，並於指定時間內列印填寫中獎回函等紙本，以掛號方式寄回，經本公司驗證無誤後寄發獎項。上述文件將供本公司驗證及留存，活動結束後不再退還。
                                </p>
                                <p>
                                    2.
                                    本公司將於收到中獎者寄回之資料並驗證無誤後，於60個工作日內寄出獎項；拒絕提供個人資料、資料未備齊、有誤、逾期者皆視同放棄領獎。
                                </p>
                                <p>
                                    3.
                                    中獎者兌獎相關文件需依中獎通知信中規定時限（以郵戳為憑）前寄回，若因填寫資料有誤或於郵寄過程中發生遺失或破損導致無法聯繫及寄送，視為自動棄權，不再另行通知，且中獎者不得異議。本公司得不遞補其他中獎者。
                                </p>
                                <strong>以下尚有內容未完...</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="black-field" v-if="lightBoxApplyShow">
                <button class="close-btn" @click="lightBoxApplyOpen(false)">
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
                                require(`@/assets/img/index2-1/light-box/circle_bg.png`) +
                                ')',
                        }"
                    >
                        <div class="content-box">
                            <div class="step1" v-if="apply.step === 1">
                                <p class="title">好物推薦心得</p>
                                <div class="text">
                                    <p>
                                        家裡五個人用量大，又住五樓，每次採買搬重物都很想哭，自從發現FiJi洗衣紙，家裡五個人用量大，又住五樓，每次採買搬重物都很想哭，自從發現FiJi洗衣紙，家裡五個人用量大，自從發現FiJi洗衣紙，此為假字此。
                                    </p>
                                </div>
                                <button @click="onStep1Click()">
                                    分享抽大獎
                                </button>
                            </div>
                            <div class="step2" v-if="apply.step === 2">
                                <p class="title">Fiji抽獎注意事項</p>
                                <div class="content">
                                    <strong>活動期間</strong>
                                    <p>即日起至 2023/3/10（五）。</p>
                                    <strong>活動內容</strong>
                                    <p>
                                        於活動期間內填寫姓名、電話、Email並分享「FiJi
                                        飛漬洗衣紙」媽咪拜愛用者好評心得至個人FB或IG，並設定公開，就有機會獲得「LG蒸氣滾筒洗衣機(蒸洗脫烘)
                                        冰磁白WD-S13VDW」。分享次數越多，中獎機率越高。
                                    </p>
                                    <strong> 獎項內容 </strong>
                                    <p>
                                        1. LG蒸氣滾筒洗衣機(蒸洗脫烘)
                                        冰磁白WD-S13VDW 壹台，一名
                                        (市價36,900元)。
                                    </p>
                                    <p>
                                        2. FiJi飛漬洗衣紙清新30抽六盒，三名
                                        (市價2,250元)。
                                    </p>
                                    <strong>活動辦法</strong>
                                    <p>
                                        1. 於活動期間內至『FiJi 飛漬洗衣紙
                                        好評分享抽大獎』活動頁http://LG_Fiji.com.tw分享「FiJi
                                        飛漬洗衣紙」愛用者好評至個人FB或IG，並設定公開，即可參加抽獎。
                                    </p>
                                    <p>
                                        2.
                                        中獎者需保留FB或IG公開分享內容至2023/3/31（五），並於兌獎時提出畫面截圖（須顯示發文帳號及時間）供本公司活動小組進行核對，若無法提供者，即取消中獎資格。
                                    </p>
                                    <p>
                                        3.
                                        每位中獎者不得重複領獎，獎項以市價高者為優先贈予。
                                    </p>
                                    <strong>抽獎時間與中獎公告</strong>
                                    <p>
                                        1.
                                        中獎名單將由電腦隨機抽出，並於<span>2023/3/20(一)</span>公佈於LG生活健康FB粉絲專頁
                                        <a
                                            target="blank"
                                            href="https://www.facebook.com/lglife"
                                            >https://www.facebook.com/lglife</a
                                        >
                                        ，及E-mail寄出中獎通知信給中獎者。中獎者收到電子郵件後，請依郵件內容，並於指定時間內列印填寫中獎回函等紙本，以掛號方式寄回，經本公司驗證無誤後寄發獎項。上述文件將供本公司驗證及留存，活動結束後不再退還。
                                    </p>
                                    <p>
                                        2.
                                        本公司將於收到中獎者寄回之資料並驗證無誤後，於60個工作日內寄出獎項；拒絕提供個人資料、資料未備齊、有誤、逾期者皆視同放棄領獎。
                                    </p>
                                    <p>
                                        3.
                                        中獎者兌獎相關文件需依中獎通知信中規定時限（以郵戳為憑）前寄回，若因填寫資料有誤或於郵寄過程中發生遺失或破損導致無法聯繫及寄送，視為自動棄權，不再另行通知，且中獎者不得異議。本公司得不遞補其他中獎者。
                                    </p>
                                    <strong>以下尚有內容未完...</strong>
                                </div>
                                <div class="agree">
                                    <input
                                        v-model="apply.agree"
                                        id="agree"
                                        type="checkbox"
                                    />
                                    <label for="agree"
                                        >已詳閱並同意抽獎活動辦法</label
                                    >
                                </div>
                                <button
                                    :class="{ disabled: !apply.agree }"
                                    @click="onStep2Click()"
                                >
                                    下一步
                                </button>
                            </div>
                            <div class="step3" v-if="apply.step === 3">
                                <p class="title">中獎後連繫資訊</p>
                                <div class="input-box">
                                    <div class="input">
                                        <p>姓 名</p>
                                        <input
                                            v-model="apply.data.name"
                                            id="name"
                                            type="text"
                                        />
                                    </div>
                                    <div class="input">
                                        <p>手機號碼</p>
                                        <input
                                            v-model="apply.data.phone"
                                            id="phone"
                                            type="text"
                                        />
                                    </div>
                                    <div class="input">
                                        <p>Email</p>
                                        <input
                                            v-model="apply.data.email"
                                            id="email"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <button @click="onStep3Click()">
                                    下一步抽大獎
                                </button>
                            </div>
                            <div class="step4" v-if="apply.step === 4">
                                <p class="title">感謝分享</p>
                                <img
                                    :src="
                                        require(`@/assets/img/index2-1/light-box/thank-share.png`)
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
</template>
<script>
export default {
    name: "ShareComponent",
    props: {},
    data() {
        return {
            lightBoxIntroShow: false,
            lightBoxApplyShow: false,
            apply: {
                step: 1,
                agree: false,
                data: {
                    name: null,
                    phone: null,
                    email: null,
                },
                share: false,
            },
        };
    },
    created() {},
    mounted() {
        window.fbAsyncInit = function () {
            /* global FB */
            FB.init({
                appId: "935058840744913",
                cookie: true,
                xfbml: true,
                version: "v11.0",
            });
        };
    },
    methods: {
        onStep1Click() {
            this.apply.step = 2;
        },
        onStep2Click() {
            this.apply.step = 3;
        },
        onStep3Click() {
            // FB.ui(
            //     {
            //         display: "popup",
            //         method: "share",
            //         href: "https://developers.facebook.com/docs/",
            //     },
            //     function (response) {
            //         console.log(response);
            //     }
            // );
            this.apply.step = 4;
        },
        lightBoxIntroOpen(isOpen) {
            this.lightBoxIntroShow = isOpen;
        },
        lightBoxApplyOpen(isOpen) {
            this.lightBoxApplyShow = isOpen;
            this.resetApply();
        },
        resetApply() {
            this.apply = {
                step: 1,
                agree: false,
                data: {
                    name: null,
                    phone: null,
                    email: null,
                },
                share: false,
            };
        },
    },
    filters: {},
};
</script>
<style scoped lang="scss" src="./share.scss"></style>
