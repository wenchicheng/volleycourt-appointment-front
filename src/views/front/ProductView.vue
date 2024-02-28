<template>
  <div class="top-block"></div>
  <div>
    <v-container
    class="h-100 d-flex justify-center align-center"
      :style="{ width: getContainerWidth() }"
    >
      <v-row>
        <v-col cols="12">
          <h1 style="color:rgb(26, 108, 163);">{{ product.name }}</h1>
        </v-col>
        <v-col cols="12" md="6">
          <div class="mask d-flex justify-center align-center">
            <v-img :src="product.image"></v-img>
          </div>
        </v-col>
        <v-col cols="12" md="6" style="color:rgb(26, 108, 163);">
          <h2>${{ product.price }}</h2>
          <h3 style="white-space: pre;">{{ product.description }}</h3>
          <v-form :disabled="isSubmitting" @submit.prevent="submit">
            <v-text-field
            type="number" min="0" label="數量" variant="outlined" rounded="pill" class="mt-8"
            v-model.number="quantity.value.value"
            :error-messages="quantity.errorMessage.value">
            </v-text-field>
            <v-btn
            type="submit"
            prepend-icon="mdi-cart" rounded="pill" size="x-large" block class="mt-4"
            :loading="isSubmitting"
            variant="outlined" height="56">
              加入購物車
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-overlay :model-value="!product.sell" class="align-center justify-center text-center" persistent>
    <v-row>
      <v-col cols="12">
        <h1 class="text-white text-h1 font-weight-medium">已下架</h1>
      </v-col>
      <v-col cols="12">
        <v-btn to="/shop" color="rgb(110, 171, 217)" rounded="pill" size="x-large" class="font-weight-bold">回商品頁</v-btn>
      </v-col>
    </v-row>
  </v-overlay>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const { api, apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()

// 預設值建議先打好，避免後續程式碼出錯
const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const schema = yup.object({
  quantity: yup.number().typeError('格式錯誤 或 缺少數量').required('缺少數量').min(1, '數量最小為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
    })
    user.cart = data.result
    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
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
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

onMounted(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = `購物網 | ${product.value.name}`
  } catch (error) {
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
    router.push('/')
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
height: 130px;
/* background-color: #fff; */
}
.mask{
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius:2rem;
}
</style>
