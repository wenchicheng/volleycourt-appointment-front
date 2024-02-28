<template>
  <div class="top-block"></div>
  <div>
    <v-container
      class="h-100 d-flex justify-center align-center"
      :style="{ width: getContainerWidth() }"
    >
      <v-row>
        <v-col cols="12">
          <h1 class="text-center mt-15 mb-5" style="color: rgb(70, 70, 70);">訂單</h1>
        </v-col>
        <v-col>
          <v-data-table :items="reservations" :headers="headers">
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const reservations = ref([])
const headers = [
  { title: '訂單編號', key: '_id' },
  { title: '場地', key: 'court' },
  { title: '預約時間', key: 'createdAt' },
  { title: '日期', key: 'Date' },
  { title: '開始', key: 'begin' },
  { title: '結束', key: 'end' },
  { title: '網高', key: 'height' },
  { title: '說明', key: 'info' }
]

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/reservations')
    reservations.value.push(...data.result)
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
</style>
