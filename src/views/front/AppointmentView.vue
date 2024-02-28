<template>
  <div class="top-block"></div>
  <div>
    <v-container
      class="h-100 d-flex justify-center align-center"
      :style="{ width: getContainerWidth() }"
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
                    >預約</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" transition="dialog-top-transition" width="600">
        <v-card class="mx-auto pa-8" max-width="500" rounded="xl">
          <v-card-item class="text-center">
            <v-card-title>
              <div class="text-h4 font-weight-bold mb-4">預約確認</div>
            </v-card-title>

            <template v-slot:append>
              <v-defaults-provider
                :defaults="{
                  VBtn: {
                    variant: 'text',
                    density: 'comfortable',
                  },
                }"
              >
              </v-defaults-provider>
            </template>
          </v-card-item>

          <v-list class="overflow-hidden">
            <v-row>
              <v-col cols="5">
                <v-list-item
                  prepend-icon="mdi-email"
                  title="會員信箱"
                ></v-list-item>
              </v-col>
              <v-col cols="7" class="d-flex align-center">
                <v-list-item-title>{{ user.email }}</v-list-item-title>
              </v-col>

              <v-divider></v-divider>

              <v-col cols="5">
                <v-list-item
                  prepend-icon="mdi-calendar"
                  title="預約日期"
                ></v-list-item>
              </v-col>
                <v-col cols="7" class="d-flex align-center">
                  <v-list-item-title>{{ selectedDate.toLocaleDateString() }}</v-list-item-title>
              </v-col>

              <v-divider></v-divider>

              <v-col cols="5">
                <v-list-item
                  prepend-icon="mdi-clock"
                  title="預約時間"
                ></v-list-item>
              </v-col>
              <v-col cols="7" class="d-flex align-center">
                  <v-list-item-title>{{ currentAppointment.begin + " ~ " + currentAppointment.end }}</v-list-item-title>
              </v-col>

              <v-divider></v-divider>

              <v-col cols="5">
                <v-list-item
                  prepend-icon="mdi-map-marker"
                  title="預約場地"
                ></v-list-item>
              </v-col>
              <v-col cols="7" class="d-flex align-center">
                <v-list-item-title>排球場A</v-list-item-title>
              </v-col>

              <v-divider></v-divider>

              <v-col cols="5" class="d-flex align-center">
                <v-list-item
                  prepend-icon="mdi-table-row-height"
                  title="網高"
                ></v-list-item>
              </v-col>
              <v-col cols="7" class="d-flex align-center">
                <v-list-item-title>{{ currentAppointment.height }}</v-list-item-title>
              </v-col>

              <v-divider></v-divider>

              <v-col cols="5" class="d-flex align-center">
                <v-list-item
                  prepend-icon="mdi-information"
                  title="說明"
                ></v-list-item>
              </v-col>
              <v-col cols="7" class="d-flex align-center">
                <v-chip
                    v-for="(item, index) in currentAppointment.info"
                    :key="index"
                    variant="tonal"
                  >
                    {{ item }}
                  </v-chip>
              </v-col>
              <v-col cols="12" class="text-center">
                <v-btn color="green" class="mb-4 text-h6"
                :disabled="canCheckout" :loading="isSubmitting" @click="checkout" rounded="pill" size="large">
                    確認
                </v-btn>
              </v-col>
            </v-row>
          </v-list>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, nextTick, defineProps } from 'vue'
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'
// import { date } from 'yup'
import { useRouter } from 'vue-router'

const { api } = useApi()
const createSnackbar = useSnackbar()

const appointments = ref([])
const currentAppointment = ref()
const selectedDate = ref()
const reservation = ref([])

const panel = ref([])
const dialog = ref(false)

const { apiAuth } = useApi()
const user = useUserStore()
const router = useRouter()

// 定義 appointment 屬性
// const props = defineProps({
//   appointment: {
//     type: Object,
//     required: true
//   }
// })

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

// 取得當日開放場次
const getAppointment = async () => {
  try {
    const { data } = await api.get('/appointments/date/', {
      params: {
        date: selectedDate.value.getTime()
      }
    })
    appointments.value = data.result
  } catch (error) {
    console.log(error)
  }
}

// 預約============================================
const reserve = async (appointment) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/reservation', {
      appointment: appointment._id,
      quantity: 1
    })
    user.reservation = data.result
    createSnackbar({
      text: '進入預約確認',
      showCloseButton: false,
      snackbarProps: {
        timeout: 1500,
        color: 'green',
        location: 'bottom'
      }
    })
    currentAppointment.value = appointment
    dialog.value = true
  } catch (error) {
    console.log('預約錯誤', error)
    const text = error?.response?.data?.message || '預約發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 1500,
        color: 'red',
        location: 'bottom'
      }
    })
  }
}

const canCheckout = computed(() => {
  return reservation.value.length > 0 && !reservation.value.some(item => !item.product.sell)
})

// 結帳========================================
const isSubmitting = ref(false)
const checkout = async () => {
  isSubmitting.value = true
  try {
    await apiAuth.post('/reservations')
    user.reservation = 0
    router.push('/reservations')
    createSnackbar({
      text: '預約成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 1500,
        color: 'green',
        location: 'bottom'
      }
    })
  } catch (error) {
    console.log('reservation checkout error', error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 1500,
        color: 'red',
        location: 'bottom'
      }
    })
  }
  isSubmitting.value = false
}

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    reservation.value.push(...data.result)
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 1500,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

</script>

<style scoped>
.outline-all * {
  outline: 1px solid #e06969;
}
.top-block {
  width: 100%;
  height: 64px;
  /* background-color: #fff; */
}
::v-deep .v-expansion-panel__shadow {
  box-shadow: none !important;
}
.panel-title {
  line-height: 2rem;
  background-color: rgba(110, 171, 217, 1);
  color: white;
}
.appointment-card {
  /* margin: 8px; */
  /* padding: 8px; */
  border-radius: 4px;
  box-shadow: none;
  background-color: white;
  /* background-color:rgb(190, 217, 237) ; */
}

.v-card-title {
  color: rgb(78, 141, 189);
  font-size: 28px;
}

.v-card-subtitle {
  color: rgb(66, 66, 66);
  font-weight: 400;
  padding-top: 20px;
}
.v-card-text {
  padding-left: 20px;
  padding-bottom: 24px;
  padding-top: 8px;
}

.chips {
  padding: 4px 8px;
}

.chip {
  background-color: white;
  /* background-color: rgb(190, 217, 237); */
  border: 2px solid rgba(110, 171, 217, 1);
  color: rgb(78, 141, 189);
  font-weight: 600;
}
.reserve-btn {
  color: #fff;
  height: 80px;
  width: 80px;
  background-color: rgba(110, 171, 217, 1);
  border-radius: 50%;
  font-weight: bold;
  font-size: 1.25rem; /* equivalent to .h6 class */
}
</style>
