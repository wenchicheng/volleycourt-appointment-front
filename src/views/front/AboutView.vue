<template>
  <div class="top-block"></div>
  <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :effect="'fade'"
    :loop="true"
    :modules="modules"
    :autoplay="{
      delay: 3000,
    }"
    class="mySwiper"
  >
    <swiper-slide><img src="../../assets/272666654_122129876996494_8320183482082203450_n.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/274925362_130710516138430_2173432989958928828_n.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../../assets/275502357_133759472500201_8503645104157309647_n.jpg" alt=""></swiper-slide>

  </swiper>
  <div>
    <v-container
      class="h-100 d-flex justify-center align-center"
      :style="{ width: getContainerWidth() }"
    >
      <v-row>
        <v-col cols="12">
          <h1 class="text-center mt-15 mb-5" style="color: rgb(70,70, 70)">
            排球場 A</h1>
        </v-col>
        <!-- 場地資訊  ---------------------------------------------------->
        <v-col cols="12">
          <v-expansion-panels :readonly="true" v-model="panel1" multiple class="panels">
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>
                  <v-icon left>mdi-menu-right</v-icon>場地資訊
                </h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <h3 class="" style="display: inline-block">
                  1. 排球網不可調整，如擅自調整造成設備/耗材損壞，租借人須照價賠償。<br />
                  <v-divider class="my-2"></v-divider>
                  2. 備有洗手間、製冰機(僅供冰敷)及飲水機。<br />
                  <v-divider class="my-2"></v-divider>
                  3. 合成橡膠地板。<br />
                  <v-divider class="my-2"></v-divider>
                  4. 單面球場入場人數上限20人。<br />
                  <v-divider class="my-2"></v-divider>
                  5. 場館內禁任何飲食、飲料、吸菸、檳榔、口香糖等行為(白開水除外)。<br />
                  <v-divider class="my-2"></v-divider>
                  6. 入場須穿運動鞋，嚴禁穿著高跟鞋、皮質鞋底之鞋款入場。<br />
                  <v-divider class="my-2"></v-divider>
                  7. 租借單位須於租借時段內完成進退場。<br />
                </h3>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <!-- 租借時間 ---------------------------------------------------->

        <v-col cols="12" style="padding-bottom: 0">
          <v-expansion-panels :readonly="true" multiple v-model="panel2" class="panels">
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>
                  <v-icon left>mdi-menu-right</v-icon>租借時間
                </h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <h3 class="" style="display: inline-block">
                  點選確認租借至完成租借，因系統作業需時，請稍待，勿重複點選確認，避免重複出現租借紀錄。
                  租借場地至少需連續兩小時以上。
                </h3>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" style="padding-top: 0">

        </v-col>

        <!-- 預約流程 ---------------------------------------------------->

        <v-col cols="12">
          <v-expansion-panels :readonly="true" multiple v-model="panel3" class="panels">
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>
                  <v-icon left>mdi-menu-right</v-icon>預約流程
                </h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <h3 class="" style="display: inline-block">
                  Step 1. 請先登入，至「預約報名」選擇想參加的場次訂位報名。<br />
                  <v-divider class="my-2"></v-divider>
                  Step 2. 報名完成後可於「我的預約」查看報名狀態及取消報名。<br />
                  <v-divider class="my-2"></v-divider>
                  Step 3. 報名成功後，請依約出現，未在場次開始前12小時取消報名而未到場者，將暫停該帳號之報名權限。<br />
                </h3>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div style="width: 100%;height: 150px;"></div>
  <FooterComp></FooterComp>
</template>

<script setup>
// Import Swiper Vue.js components
import { ref } from 'vue'
import FooterComp from '@/components/FooterComp.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
const modules = [Navigation, Pagination, Autoplay, EffectFade]
const panel1 = ref([0])
const panel2 = ref([0])
const panel3 = ref([0])

const getContainerWidth = () => {
  const screenWidth = window.innerWidth
  if (screenWidth >= 1200) {
    return '70%'
  } else if (screenWidth >= 960) {
    return '80%'
  } else if (screenWidth >= 600) {
    return '85%'
  } else {
    return '90%'
  }
}

</script>

<style scoped>
.mySwiper{
  height: 500px;
  width: 100%;
  filter: brightness(1.3);
}

.swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(1);
    }
.top-block{
  width: 100%;
  height: 64px;
/* background-color: #fff; */
}

::v-deep .v-expansion-panel__shadow {
  box-shadow: none !important;
}
.panel-title {
  line-height: 1rem;
  background-color: rgba(110, 171, 217, 1);
  color: white;
}
</style>
