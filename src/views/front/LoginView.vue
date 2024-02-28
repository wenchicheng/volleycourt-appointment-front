<template>
  <v-container class="h-100 d-flex justify-center align-center">
    <v-row class="h-100 d-flex justify-center align-center">
      <v-col cols="12" lg="5" class="dialog">
        <LoginComp></LoginComp>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import LoginComp from '@/components/LoginComp.vue'
</script>

<style scoped>
.dialog{
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>
