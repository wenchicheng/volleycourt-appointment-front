<template>
    <v-container>
      <v-row class="row">
        <v-col cols="12">
          <h1 class="text-center mt-4">訂單管理</h1>
        </v-col>
        <v-col>
          <v-data-table :items="orders" :headers="headers">
            <template v-slot:item.createdAt="{ item }">
              {{ new Date(item.createdAt).toLocaleString() }}
            </template>
            <template v-slot:item.cart="{ item }">
              <ul>
                <li v-for="cart in item.cart" :key="cart._id">
                  {{ cart.product.name }} * {{ cart.quantity }}
                </li>
              </ul>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const orders = ref([])
const headers = [
  { title: '訂單編號', key: '_id' },
  { title: '帳號', key: 'user.account' },
  { title: '日期', key: 'createdAt' },
  { title: '商品', key: 'cart', sortable: false },
  {
    title: '金額',
    key: 'price',
    sortable: false,
    value: (item) => {
      return item.cart.reduce((total, current) => {
        return total + current.quantity * current.product.price
      }, 0)
    }
  }
]

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.value.push(...data.result)
  } catch (error) {
    console.log('admin-OrdersView.vue-onMounted')
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
.row{
  width: 80%;
  margin: 0 auto;
}
.v-data-table__thead {
  font-weight: bold;
}
.v-data-table {
    background-color: rgb(255, 255, 255);
    font-weight: bold;
}
</style>
