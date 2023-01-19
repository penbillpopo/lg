<template>
    <div class="container">
        <navComponent
            v-if="!lightBoxIntroShow && !lightBoxApplyShow"
        ></navComponent>
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
                    ref="fb"
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
                    :src="require(`@/assets/img/index2-1/images_1.png`)"
                    alt=""
                />
                <img
                    class="image2"
                    :src="require(`@/assets/img/index2-1/images_2.png`)"
                    alt=""
                />
                <img
                    class="image3"
                    :src="require(`@/assets/img/index2-1/images_3.png`)"
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
                                <strong>領獎流程與說明</strong>
                                <p>
                                    1.
                                    贈品依實物為準，恕無法指定顏色及挑選款式。中獎者不得要求更換、轉讓贈品或折換現金。
                                </p>
                                <p>
                                    2.
                                    如因非可歸責於本公司之事由而獎項有缺貨、停產等情況，本公司有權於告知中獎者後更換市價等值產品，中獎者不得異議。
                                </p>
                                <p>
                                    3.
                                    本次抽獎內容僅包含獎項本身，不包含安裝或運送等其他費用，如因樓層較高或偏遠地區搬運不便，導致貨運公司需額外收取運費或其他費用，應由中獎者自行負擔。
                                </p>
                                <p>
                                    4.
                                    於寄送贈品過程中，若發生任何毀壞、錯遞、延遲、遺失或遇不可抗力之因素等非可歸責於本公司之情況，本公司恕不負責。
                                </p>
                                <p>
                                    5.
                                    贈品寄送地址僅限臺灣本島地區。本活動將依中獎者所提供之地址為奬項配送地址，且不接受變更中獎者聯絡住址或中獎者姓名等轉讓行為，以避免產生冒領獎項之情況。另，本公司將不負擔贈品無法送達之一切責任。
                                </p>
                                <p>
                                    6.
                                    中獎者若未滿18歲，應檢附戶籍謄本及法定代理人同意書，並應獲得法定代理人同意及代為領取、繳納稅賦。
                                </p>
                                <p>
                                    7.
                                    依中華民國所得稅法之規定，中獎者若為中華民國境內居住之個人，中獎獎項價值若超過新台幣1,000元以上者，需繳交身分證正反面影本供報稅使用，並列入該年度個人綜合所得稅申報。若中獎價值超過新臺幣20,000元整，中獎者須自行負擔10%之所得稅，並配合本公司辦理代扣繳相關事宜，預扣稅金後始可領獎。中獎者若非中華民國境內居住之個人，無論中獎價值金額為何，均須先自行負擔20%之稅金後始可領獎。若中獎者不願配合本公司辦理相關程序者，將視同放棄中獎資格，本公司不另行通知。
                                </p>
                                <strong>注意事項 </strong>
                                <p>
                                    1.
                                    所有活動資料及中獎資格，須經本公司查驗審核，如：基本資料、聯絡方式、發票真偽等。經本公司驗證後，只要其中任何一項條件不符合，則喪失參加資格，本公司將不進行網路公告，亦不再通知。中奬者自願放棄領獎資格者或經本公司取消中獎資格者視同喪失參加資格，本公司不再進行網路公告及通知。
                                </p>

                                <p>
                                    2.
                                    參加者及中獎者保證所有填寫、提供之資料均為真實完整且正確，且未有冒用或盜用任何第三人之資料。若資料有不實、不完整及不正確或無法取得聯絡，本公司得取消中獎資格，若因此發生損害本公司或其他第三人，應自負一切民刑事責任。
                                </p>
                                <p>
                                    3.
                                    經檢舉或查證活動參與者有直接或間接以不正常或不當之手法進行影響本活動公正性或正常運作之行為，本公司有權取消參加、中獎資格，並依法處理。如已抽獎，本公司得追回獎品或相當於獎品價值之金額，抽出之獎項將不遞補，活動參與者不得有異議。
                                </p>
                                <p>
                                    4.
                                    本活動如有任何因電腦、網路、電話、技術或其他不可歸責於本公司之事由，而使參與本活動者所登錄之資料有遺失、錯誤、無法辨識或毀損所導致資料無效之情況，本公司或相關人員不負任何法律責任，參加者與中獎者亦不得異議。
                                </p>
                                <p>
                                    5.
                                    參加本活動視同同意活動相關規定，本公司保有隨時修改本活動條款及細則之權利，並得視情況暫停或終止本活動。
                                </p>
                                <strong>個資告知事項 </strong>
                                <p>
                                    依據個人資料保護法等相關規定，以下告知事項請臺端詳閱，當臺端參加本活動時表示已同意內容：
                                </p>
                                <p>
                                    1.
                                    蒐集個人資料公司：LG生活健康（即臺灣樂金生活健康股份有限公司，以下簡稱本公司）。
                                </p>
                                <p>
                                    2. 蒐集之目的：『FiJi 飛漬洗衣紙
                                    好評分享抽大獎』活動（以下簡稱本活動)之抽獎、兌獎及本活動相關聯繫。
                                </p>
                                <p>
                                    3.
                                    個人資料之類別：個人資料中之識別類（輸入之姓名、電話、email）。
                                </p>
                                <p>
                                    4.
                                    個人資料利用之期間：自參加本活動之日起至活動結束後6個月止，之後將逕行刪除不予留存。
                                </p>
                                <p>
                                    5.
                                    個人資料利用之地區：本公司營運範圍，僅限於臺灣本島、金門、澎湖、馬祖等地區，且不會移轉至其他境外地區利用。
                                </p>
                                <p>
                                    6.
                                    個人資料利用之對象及方式：由本公司該業務承辦人員於辦理本活動之特定目的的（含獎項派送）必要範圍內，以通常作業方式利用此個人資料。
                                </p>
                                <p>
                                    7.
                                    臺端得就個人資料洽詢本公司行使「查詢」、「閱覽」、「補充」、「更正」、「製給複製本」、「請求停止蒐集、處理、利用」及「請求刪除」等權利（註：若申請查詢、閱覽、製給複製本時，本公司將酌收必要成本費用。）；除符合個人資料保護法規定之例外事由外，本公司不會拒絕臺端權利之行使。
                                </p>
                                <p>
                                    8.
                                    臺端得選擇是否提供相關個人資料，惟若未完整提供本活動要求填寫的資料，或填寫有誤者，則無法參與本活動。
                                </p>
                                <p>
                                    9.
                                    臺端透過本活動輸入個人資料參與活動時，均視為臺端已了解本公司蒐集、處理及利用個人資料的目的及用途，並同意將個人資料提供本公司於辦理本活動之特定目的範圍內處理及利用。
                                </p>
                                <p>
                                    10.
                                    個人資料安全措施：本公司將依據相關法令之規定建構完善措施，保障臺端個人資料之安全。
                                </p>
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
                                <button
                                    :class="{
                                        disabled: !(
                                            this.apply.data.name &&
                                            this.apply.data.phone &&
                                            this.apply.data.email
                                        ),
                                    }"
                                    @click="onStep3Click()"
                                >
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
import navComponent from "../../component/nav/nav.vue";

export default {
    name: "ShareComponent",
    components: {
        navComponent,
    },
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
            },
            hash: this.$route.hash,
        };
    },
    created() {},
    mounted() {
        window.fbAsyncInit = function () {
            /* global FB */
            FB.init({
                appId: "440644321520782",
                cookie: true,
                xfbml: true,
                version: "v11.0",
            });
        };
        this.$nextTick(function () {
            if (this.hash) {
                const refName = this.hash.replace("#", "");
                this.scrollToSection(refName);
            }
        });
    },
    methods: {
        scrollToSection(sessionName) {
            if (this.$refs[sessionName]) {
                this.$refs[sessionName].scrollIntoView();
            }
        },
        onStep1Click() {
            this.apply.step = 2;
        },
        onStep2Click() {
            this.apply.step = 3;
        },
        onStep3Click() {
            let _this = this;
            this.axios
                .post("https://2908.api.gosu.bar/customize/addLgMember", {
                    name: this.apply.data.name,
                    email: this.apply.data.email,
                    phone: this.apply.data.phone,
                })
                .then(() => {
                    FB.ui(
                        {
                            display: "popup",
                            method: "share",
                            href: "http://www.lgfiji.com.tw/",
                        },
                        function () {
                            _this.apply.step = 4;
                        }
                    );
                })
                .catch((error) => {
                    alert("資料傳輸失敗");
                    console.error(error);
                });
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
            };
        },
    },
    filters: {},
};
</script>
<style scoped lang="scss" src="./share.scss"></style>
