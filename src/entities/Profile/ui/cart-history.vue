<template>
  <div class="hidden p-4 " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
    <div class="mt-10 flex items-center justify-center">
      <div class="flex flex-col items-center gap-4 ">
        <img :src="Basket" alt="basket">
        <div>
          Sizning xarid savatingiz hali bo’sh
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
import { ArrowBack, Basket } from "@/shared/utils/images";
</script>
