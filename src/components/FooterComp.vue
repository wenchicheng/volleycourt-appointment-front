<template>
  <v-footer style="background-color: rgb(203, 223, 241); padding-top: 50px;padding-bottom: 20px; color: rgb(66, 144, 204);">
    <v-container>
      <v-row class="text-center d-flex flex-column">
        <div>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-8 my-2"
            :icon="icon"
            variant="text"
          ></v-btn>
        </div>
      </v-row>
      <v-row class="text-center d-flex flex-column" style="letter-spacing: 2px; font-size: 14px;">
        <v-col>
          <p>©{{ new Date().getFullYear() }} 一起來打排 by 泰山網頁前端班 wenchicheng.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue'
const icons = ref([
  'mdi-instagram',
  'mdi-facebook',
  'mdi-facebook-messenger',
  'mdi-youtube',
  'mdi-twitter'
])
</script>

<style scoped>
</style>
