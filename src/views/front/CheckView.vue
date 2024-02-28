<template>
  <div class="top-block"></div>
    <div style="border: 2px solid rgb(4, 0, 255);">
      <v-container
        class="h-100 d-flex justify-center align-center"
        :style="{ width: getContainerWidth() }"
        style="border: 2px solid #bc3636;"
      >
      <v-row class="row">
        <v-col cols="12">
          <h1 class="text-center mt-15 mb-5" style="color: rgb(26, 108, 163);">確認預約</h1>
        </v-col>
        <v-col cols="12">
          <v-data-table :items="reservation" :headers="headers">
            <template #item.appointment.name="{ item }">
              <span v-if="item.appointment.sell">{{ item.appointment.name }}</span>
            </template>
            <template #item.quantity="{ item }">
              <div class="number-box">
                <v-btn variant="text" icon="mdi-minus" color="red" @click="addReservation(item.appointment._id, -1)"></v-btn>
                {{ item.quantity }}
                <v-btn variant="text" icon="mdi-plus" color="green" @click="addReservation(item.appointment._id, 1)"></v-btn>
              </div>
            </template>
            <template #item.action="{ item }">
              <v-btn variant="text" icon="mdi-delete" color="rgb(26, 108, 163)" @click="addReservation(item.appointment._id, item.quantity * -1)"></v-btn>
            </template>
          </v-data-table>
        </v-col>

        <!--  -->
        <v-col class="" cols="12">
          <v-card
            class="mx-auto pa-8"
            max-width="500"
            rounded="xl"
          >
            <v-card-item class="text-center">
              <v-card-title>
                <span class="text-h5">請再次確認以下內容</span>
              </v-card-title>

              <template v-slot:append>
                <v-defaults-provider
                  :defaults="{
                    VBtn: {
                      variant: 'text',
                      density: 'comfortable',
                    }
                  }"
                >
                </v-defaults-provider>
              </template>
            </v-card-item>

            <v-list class="overflow-hidden">
              <v-row>
                <v-col cols="6">
                  <v-list-item
                    prepend-icon="mdi-email"
                    title="會員信箱"
                  ></v-list-item>
                </v-col>
                <v-col cols="6"></v-col>

                <v-divider></v-divider>

                <v-col cols="6">
                  <v-list-item
                    prepend-icon="mdi-calendar"
                    title="預約日期"
                  ></v-list-item>
                </v-col>
                <v-col cols="6"></v-col>

                <v-divider></v-divider>

                <v-col cols="6">
                  <v-list-item
                    prepend-icon="mdi-clock"
                    title="預約時間"
                  ></v-list-item>
                </v-col>
                <v-col cols="6"></v-col>

                <v-divider></v-divider>

                <v-col cols="6">
                  <v-list-item
                    prepend-icon="mdi-map-marker"
                    title="預約場地"
                  ></v-list-item>
                </v-col>
                <v-col cols="6"></v-col>

                <v-divider></v-divider>

                <v-col cols="6">
                  <v-list-item
                    prepend-icon="mdi-account-multiple"
                    title="預約人數"
                  ></v-list-item>
                </v-col>
                <v-col cols="6"></v-col>
              </v-row>
            </v-list>

            <!-- <v-img
              cover
              height="200"
              src="../../assets/272666654_122129876996494_8320183482082203450_n.jpg"
            ></v-img> -->
          </v-card>
          <v-btn color="green" class="mb-4"
          :disabled="!canCheckout" :loading="isSubmitting" @click="checkout">
          確認預約</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const reservation = ref([])
const headers = [
  { title: '場地', key: 'appointment.court' },
  { title: '日期', key: 'appointment.date' },
  { title: '開始時間', key: 'appointment.begin' },
  { title: '結束時間', key: 'appointment.end' },
  { title: '人數', key: 'quantity' },
  { title: '操作', key: 'action' }
]

// 計算總金額
const total = computed(() => {
  return reservation.value.reduce((total, current) => {
    return total + current.quantity * current.appointment.price
  }, 0)
})

// 能不能結帳，如果購物車沒有商品或有商品已下架就不能結帳
const canCheckout = computed(() => {
  return reservation.value.length > 0 && !reservation.value.some(item => !item.appointment.sell)
})

const addReservation = async (appointment, quantity) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/reservation', {
      appointment,
      quantity
    })
    user.reservation = data.result
    createSnackbar({
      text: '修改成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 1000,
        color: 'green',
        location: 'bottom'
      }
    })
    // 小於0就刪除
    const idx = reservation.value.findIndex(item => item.appointment._id === appointment)
    reservation.value[idx].quantity += quantity
    if (reservation.value[idx].quantity <= 0) {
      reservation.value.splice(idx, 1)
    }
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
}

// 結帳========================================
const isSubmitting = ref(false)
const checkout = async () => {
  isSubmitting.value = true
  try {
    await apiAuth.post('/orders')
    user.cart = 0
    router.push('/orders')
    createSnackbar({
      text: '結帳成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 1500,
        color: 'green',
        location: 'bottom'
      }
    })
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
  isSubmitting.value = false
}

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.value.push(...data.result)
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
.outline-all * {
  outline: 1px solid #e06969;
}

.top-block{
width: 100%;
height: 64px;
/* background-color: #fff; */
}

.bg-blue{
  background-color: rgb(26, 108, 163);
}

@media screen and (max-width: 960px) {
  .number-box {
    display: inline-block;
    width: 30px;
    text-align: center;
  }
}

</style>
