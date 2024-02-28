<template>
  <div class="top-block"></div>
    <div>
      <v-container
        class="h-100 d-flex justify-center align-center"
        :style="{ width: getContainerWidth() }"
      >
      <v-row class="row">
        <v-col cols="12">
          <h1 class="text-center mt-15 mb-5" style="color: rgb(70, 70, 70);">購物車</h1>
        </v-col>
        <v-col cols="12">
          <v-data-table :items="cart" :headers="headers">
            <template #item.product.name="{ item }">
              <span v-if="item.product.sell">{{ item.product.name }}</span>
              <span class="text-red text-decoration-line-through" v-else>{{ item.product.name }} (已下架)</span>
            </template>
            <template #item.quantity="{ item }">
              <div class="number-box">
                <v-btn variant="text" icon="mdi-minus" color="red" @click="addCart(item.product._id, -1)"></v-btn>
                {{ item.quantity }}
                <v-btn variant="text" icon="mdi-plus" color="green" @click="addCart(item.product._id, 1)"></v-btn>
              </div>
            </template>
            <template #item.action="{ item }">
              <v-btn variant="text" icon="mdi-delete" color="rgb(26, 108, 163)" @click="addCart(item.product._id, item.quantity * -1)"></v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-col class="text-center" cols="12">
          <h2 class="mb-4">總金額: $ {{ total }} 元</h2>
          <v-btn color="green" class="mb-4"
          :disabled="!canCheckout" :loading="isSubmitting" @click="checkout">
          結帳</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
<FooterComp></FooterComp>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useUserStore } from '@/store/user'
import { useRouter } from 'vue-router'
import FooterComp from '@/components/FooterComp.vue'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()
const router = useRouter()

const cart = ref([])
const headers = [
  { title: '商品名稱', key: 'product.name' },
  { title: '單價', key: 'product.price' },
  { title: '數量', key: 'quantity' },
  { title: '總價', key: 'total', value: item => item.product.price * item.quantity },
  { title: '操作', key: 'action' }
]

// 計算總金額
const total = computed(() => {
  return cart.value.reduce((total, current) => {
    return total + current.quantity * current.product.price
  }, 0)
})

// 能不能結帳，如果購物車沒有商品或有商品已下架就不能結帳
const canCheckout = computed(() => {
  return cart.value.length > 0 && !cart.value.some(item => !item.product.sell)
})

const addCart = async (product, quantity) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product,
      quantity
    })
    user.cart = data.result
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
    const idx = cart.value.findIndex(item => item.product._id === product)
    cart.value[idx].quantity += quantity
    if (cart.value[idx].quantity <= 0) {
      cart.value.splice(idx, 1)
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

.top-block{
width: 100%;
height: 64px;
/* background-color: #fff; */
}

@media screen and (max-width: 960px) {
  .number-box {
    display: inline-block;
    width: 30px;
    text-align: center;
  }
}

</style>
