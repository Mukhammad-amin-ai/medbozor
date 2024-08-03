<template>
  <div class="w-full h-full flex flex-col items-center justify-center gap-7">
    <div>
      <img :src="SearchImg" alt="SearchImg">
    </div>
    <div class="text-xl">
      Qidirgan mahsulotingiz topilmadi
    </div>
    <ButtonWithIcon :icon="ArrowBack" text="Bosh sahifaga o’tish" text-color="#1272CC" class="border border-[#1272CC] rounded-2xl"/>
  </div>
</template>

<script setup>
import { SearchImg, ArrowBack } from '@/shared/utils/images'
import { ButtonWithIcon } from "@/shared/buttons";
</script>

<style scoped>

</style>