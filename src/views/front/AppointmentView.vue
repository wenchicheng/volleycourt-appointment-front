<template>
  <div class="top-block"></div>
  <div style="border: 2px solid rgb(4, 0, 255);">
    <v-container
      class="h-100 d-flex justify-center align-center"
      :style="{ width: getContainerWidth() }"
      style="border: 2px solid #bc3636;"
    >
      <v-row>
        <v-col cols="12">
          <h1 class="text-center mt-15 mb-5" style="color: rgb(26, 108, 163);">預約報名</h1>
        </v-col>
        <!-- STEP 1 ---------------------------------------------------->
        <v-col cols="12" style="padding-bottom: 0;">
          <h2 style="color: rgb(26, 108, 163); display: inline-block;">Step 1</h2>
        </v-col>
        <v-col cols="12">
          <v-expansion-panels
            v-model="panel"
            multiple
            class="panels"
          >
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>報名前務必詳讀注意事項（點擊展開）</h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <h3 class="" style="display: inline-block;">
                  1. 請先登入，再選擇想參加的場次訂位報名。<br>
                  <v-divider class="my-2"></v-divider>
                  2. 報名完成後可於「我的預約」查看報名狀態及取消報名。<br>
                  <v-divider class="my-2"></v-divider>
                  3. 報名成功後，未在場次開始前12小時取消報名而未到場者，將暫停該帳號之報名權限。<br>
                </h3>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <!-- STEP 2 ---------------------------------------------------->
        <v-col cols="12" style="padding-bottom: 0;">
          <h2 style="color: rgb(26, 108, 163); display: inline-block;">Step 2</h2>
        </v-col>
        <v-col cols="12" style="padding-bottom: 0;">
          <v-expansion-panels
            :readonly="readonly"
            multiple
            class="panels"
          >
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>點選日期後請往下滑，查看當日場次</h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text></v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="12" style="padding-top: 0;">
          <v-date-picker
          width="100%"
          elevation="0"
          :first-day-of-week="1"
          rounded-xl
          v-model="selectedDate"
          @update:model-value="getAppointment"
          ></v-date-picker>
        </v-col>
        <!-- STEP 3 ---------------------------------------------------->
        <v-col cols="12" style="padding-bottom: 0;">
          <h2 style="color: rgb(26, 108, 163); display: inline-block;">Step 3</h2>
        </v-col>
        <v-col cols="12">
          <v-expansion-panels
            :readonly="readonly"
            multiple
            class="panels"
          >
            <v-expansion-panel>
              <v-expansion-panel-title class="panel-title">
                <h2>選擇以下想參加的場次按下「預約」確認報名（若無場次則不會顯示於下方）</h2>
              </v-expansion-panel-title>
              <v-expansion-panel-text></v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <!-- 時段------------------------------------------- -->
        <v-col v-for="appointment in appointments"
          :key="appointment._id"
          :cols="getCols()"
          class="cards">
          <v-card class="appointment-card">
            <v-row>
              <!-- 左側佔三分之一 -->
              <v-col cols="8">
                <v-card-subtitle>
                  {{ selectedDate.toLocaleDateString() }}
                </v-card-subtitle>
                <v-card-title>
                  {{ appointment.begin + ' ~ ' + appointment.end }}
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="auto" v-for="(infoItem, index) in appointment.info" :key="index" class="chips">
                      <v-chip class="chip" variant="outlined">{{ infoItem }}</v-chip>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <!-- 右側佔四分之一 -->
              <v-col cols="4" class="d-flex justify-center align-center" style="padding-right: 32px;">
                <v-card-actions>
                  <v-btn class="reserve-btn" @click="reserve">預約</v-btn>
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
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { date } from 'yup'

const { api } = useApi()
const createSnackbar = useSnackbar()

const appointments = ref([])
const selectedDate = ref()
const panel = ref([])

// 把頁面上的資料取出來，在onMounted的時候才可以抓到頁面上DOM元素
onMounted(async () => {
  try {
    const { data } = await api.get('/appointments/date', {
      params: {
        date: new Date().toISOString().split('T')[0]
      }
    })
    appointments.value.push(...data.result)
    await nextTick()
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

// 設定container的寬度
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

const getCols = () => {
  const screenWidth = window.innerWidth
  if (screenWidth >= 800) {
    return 6 // lg
  } else {
    return 12 // xs, sm, md
  }
}

const getAppointment = async () => {
  try {
    const { data } = await api.get('/appointments/date/', {
      params: {
        date: selectedDate.value.getTime()
      }
    })
    appointments.value = data.result
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

</script>

<style scoped>
.outline-all * {
  outline: 1px solid #e06969;
}
.top-block{
width: 100%;
height: 64px;
/* background-color: #fff; */
}
::v-deep .v-expansion-panel__shadow {
  box-shadow: none !important;
}
.panel-title{
  line-height: 2rem;
  background-color: rgba(110, 171, 217,1);
  color: white;
}
.appointment-card {
  /* margin: 8px; */
  /* padding: 8px; */
  border-radius: 4px;
  box-shadow:none;
  background-color:white ;
  /* background-color:rgb(190, 217, 237) ; */

}

.v-card-title{
  color: rgb(78, 141, 189);
  font-size: 28px;
}

.v-card-subtitle{
  color:rgb(66, 66, 66);
  font-weight: 400;
  padding-top: 20px;
}
.v-card-text{
  padding-left: 20px;
  padding-bottom: 24px;
  padding-top: 8px;

}

.chips{
  padding: 4px 8px;
}

.chip{
  background-color: white;
  /* background-color: rgb(190, 217, 237); */
  border: 2px solid rgba(110, 171, 217,1);
  color: rgb(78, 141, 189);
  font-weight: 600;
}
.reserve-btn {
  color: #fff;
  height: 80px;
  width: 80px;
  background-color: rgba(110, 171, 217,1);
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.25rem; /* equivalent to .h6 class */
}

</style>
