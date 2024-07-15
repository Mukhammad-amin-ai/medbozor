<template>
  <button @click="toTop" class="rounded-[50%] w-[60px] h-[60px] flex items-center justify-center bg-[#1272CC] fixed bottom-2 right-2">
    <img :src="arrowTop" alt="">
  </button>
</template>

<script setup>
import { arrowTop } from '@/shared/utils/images'

let toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

</script>

<style scoped>

</style>