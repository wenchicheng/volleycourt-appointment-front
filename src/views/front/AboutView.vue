<template>
  <div class="top-block"></div>
  <div style="border: 2px solid rgb(4, 0, 255);">
  <v-container
  class="bg d-flex justify-center align-center"
  style="border: 2px solid #bc3636;">
    <div class="navigation-container">
      <div class="swiper-button-prev" @click="prevSlide"></div>
      <div class="swiper-button-next" @click="nextSlide"></div>
    </div>
    <div class="mask d-flex justify-center align-center">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :effect="'fade'"
        :loop="true"
        :modules="modules"
        :autoplay="{
          delay: 3000,
        }"
        ref="mySwiper"
        class="mySwiper"
      >
        <swiper-slide><img src="../../assets/272666654_122129876996494_8320183482082203450_n.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/274925362_130710516138430_2173432989958928828_n.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/275502357_133759472500201_8503645104157309647_n.jpg" alt=""></swiper-slide>
      </swiper>
    </div>
  </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
const modules = [Navigation, Pagination, Autoplay, EffectFade]

// const mySwiper = ref(null)

// const prevSlide = () => {
//   mySwiper.value.swiperRef.slidePrev()
//   console.log('prev')
// }

// const nextSlide = () => {
//   mySwiper.value.swiperRef.slideNext()
//   console.log('next')
// }

// onMounted(() => {
//   mySwiper.value.swiperRef.on('init', () => {
//     console.log('swiper initialized')
//   })
// })
// TAB
// const tab = ref('場地資訊')
// const items = ref([
//   '場地資訊', '收費資訊', '場地時段', 'Cocktails'
// ])
// const text = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

</script>

<style scoped>

::v-deep .swiper-button-prev {
    left: calc(10% - 24px);
    top: 350px;
  }

::v-deep .swiper-button-next {
    right: calc(10% - 24px);
    top: 350px;
  }

::v-deep .swiper-button-prev::after,
::v-deep .swiper-button-next::after {
    color: rgba(110, 171, 217,1) !important;
    scale: 0.6;
}

.top-block{
width: 100%;
height: 64px;
/* background-color: #fff; */
}

.bg{
  background-color: rgb(224, 236, 246);
}

.mask{
  position: relative;
  width: 80%;
  height: 500px;
  overflow: hidden;
  border-radius:  50% 70% 50% 70%;
}
.mySwiper{
  height: 600px;
  width: 100%;
}

.swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(1);
    }

    /* TAB */
.bg-basil {
  background-color: #FFFBE6 !important;
}
.text-basil {
  color: #356859 !important;
}

</style>
