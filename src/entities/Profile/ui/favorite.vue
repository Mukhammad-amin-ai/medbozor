<template>
  <div class="hidden p-4 " id="settings" role="tabpanel" aria-labelledby="settings-tab">
    <div class="mt-10 flex items-center justify-center">
      <div class="flex flex-col items-center gap-4 ">
        <img :src="Box" alt="basket">
        <div>
          Sevimli mahsulotlar yo’q
        </div>
        <div>
          <button class="border border-[#1272CC] text-[#1272CC] rounded-lg flex items-center p-2">
            <img :src="ArrowBack" alt="">
            Xaridga qaytish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowBack, Box } from "@/shared/utils/images";
</script>

<style scoped>

</style>