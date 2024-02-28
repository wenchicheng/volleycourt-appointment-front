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
    >
      <v-row>
        <v-col cols="12">
          <h1 class="text-center mt-15 mb-5" style="color: rgb(26, 108, 163)">
            預約報名
          </h1>
        </v-col>
        <!-- STEP 1 ---------------------------------------------------->
        <v-col cols="12" style="padding-bottom: 0">
          <h2 style="color: rgb(26, 108, 163); display: inline-block">
            <v-icon left>mdi-menu-right</v-icon>Step 1
          </h2>
        </v-col>
        <v-col cols="12">
          <v-expansion-panels v-model="panel" multiple class="panels">
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>報名前務必詳讀注意事項（點擊展開）</h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <h3 class="" style="display: inline-block">
                  1. 請先登入，再選擇想參加的場次訂位報名。<br />
                  <v-divider class="my-2"></v-divider>
                  2. 報名完成後可於「我的預約」查看報名狀態及取消報名。<br />
                  <v-divider class="my-2"></v-divider>
                  3.
                  報名成功後，未在場次開始前12小時取消報名而未到場者，將暫停該帳號之報名權限。<br />
                </h3>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <!-- STEP 2 ---------------------------------------------------->
        <v-col cols="12" style="padding-bottom: 0">
          <h2 style="color: rgb(26, 108, 163); display: inline-block">
            <v-icon left>mdi-menu-right</v-icon>Step 2
          </h2>
        </v-col>
        <v-col cols="12" style="padding-bottom: 0">
          <v-expansion-panels :readonly="readonly" multiple class="panels">
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>點選日期後請往下滑，查看當日場次</h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text></v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" style="padding-top: 0">

        </v-col>
        <!-- STEP 3 ---------------------------------------------------->
        <v-col cols="12" style="padding-bottom: 0">
          <h2 style="color: rgb(26, 108, 163); display: inline-block">
            <v-icon left>mdi-menu-right</v-icon>Step 3
          </h2>
        </v-col>
        <v-col cols="12">
          <v-expansion-panels :readonly="readonly" multiple class="panels">
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>
                  選擇以下想參加的場次按下「預約」確認報名（若無場次則不會顯示於下方）
                </h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text></v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <!-- 時段------------------------------------------- -->
        <v-col
          v-for="appointment in appointments"
          :key="appointment._id"
          :cols="getCols()"
          class="cards"
        >
          <v-card class="appointment-card" :appointment="appointment">
            <v-row>
              <!-- 左側佔三分之一 -->
              <v-col cols="8">
                <v-card-subtitle>
                  {{ selectedDate.toLocaleDateString() }}
                </v-card-subtitle>
                <v-card-title>
                  {{ appointment.begin + " ~ " + appointment.end }}
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col
                      cols="auto"
                      v-for="(infoItem, index) in appointment.info"
                      :key="index"
                      class="chips"
                    >
                      <v-chip class="chip" variant="outlined">{{
                        infoItem
                      }}</v-chip>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <!-- 右側佔四分之一 -->
              <v-col
                cols="4"
                class="d-flex justify-center align-center"
                style="padding-right: 32px"
              >
                <v-card-actions>
                  <v-btn class="reserve-btn" @click="reserve(appointment)"
                    >預約1</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// import required modules
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
const modules = [Navigation, Pagination, Autoplay, EffectFade]

</script>

<style scoped>
.mySwiper{
  height: 500px;
  width: 100%;
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
</style>
