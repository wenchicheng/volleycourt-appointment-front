<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center" style="letter-spacing: 8px;">註冊</h1>
      </v-col>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <!--   送出時停止跳頁的預設動作，執行自訂的submit -->
          <v-text-field
            label="帳號"
            minlength="4"
            maxlength="12"
            counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            prepend-icon="mdi-account-outline"
            variant="underlined"
          />
          <v-text-field
            label="信箱"
            type="email"
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            prepend-icon="mdi-email-outline"
            variant="underlined"
          />
          <v-text-field
            label="密碼"
            type="password"
            minlength="4"
            maxlength="12"
            counter
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
            prepend-icon="mdi-lock-outline"
            variant="underlined"
          />
          <v-text-field
            label="確認密碼"
            type="password"
            minlength="4"
            maxlength="12"
            counter
            v-model="passwordConfirm.value.value"
            :error-messages="passwordConfirm.errorMessage.value"
            prepend-icon="mdi-lock-outline"
            variant="underlined"
          />
          <v-btn type="submit" color="rgb(26, 108, 163)" class="w-100 mt-8" rounded="pill" variant="flat" height="2.5rem">註冊</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import validator from 'validator'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'

const { api } = useApi()

const userStore = useUserStore()
const router = useRouter()
const createSnackbar = useSnackbar()

const dialog = ref(false)

const closeDialog = () => {
  dialog.value = false
  resetForm()
}

// 定義註冊表單的資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號長度不符')
    .max(12, '使用者帳號長度不符'),
  email: yup
    .string()
    .required('信箱為必填欄位')
    // .test(自訂驗證名稱, 錯誤訊息, 驗證function)
    .test(
      'isEmail', '信箱格式錯誤',
      (value) => {
        return validator.isEmail(value)
      }
    ),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(12, '密碼長度不符'),
  passwordConfirm: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度不符')
    .max(12, '密碼長度不符')
    // .oneOf 只允許符合陣列內其中一個值
    // .oneOf(陣列, 錯誤訊息)
    // .ref('password') 代表這個 schema 的 password 欄位值
    .oneOf([yup.ref('password')], '密碼不一致')
})

const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    account: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }
})

const account = useField('account')
const email = useField('email')
const password = useField('password')
const passwordConfirm = useField('passwordConfirm')

const submit = handleSubmit(async (values) => {
  try {
    await api.post('/users', {
      // 發送一個 POST 請求到 '/users' 路徑，用於創建一個新的用戶
      account: values.account,
      email: values.email,
      password: values.password
    })
    createSnackbar({
      text: '註冊成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    // 註冊即登入
    const { data } = await api.post('/users/login', {
      email: values.email,
      password: values.password
    })
    userStore.login(data.result)
    // closeDialog()
    router.push('/')
    // 回到登入頁
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
  } finally {
    closeDialog()
  }
})

</script>
