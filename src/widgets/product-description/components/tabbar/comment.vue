<template>
  <div class="mt-8 flex items-start justify-between">
    <div class="w-[60%]">
      <div>
        <div class="font-bold">
          Bobobek Turdiyev
        </div>
        <div class="flex items-center gap-3">
          <div>
            <img :src="stars" alt="">
          </div>
          <div class="text-[14px] text-[#666666] leading-8">
            18.09.2023
          </div>
        </div>
        <div class="leading-8 text-[14px]">
          I have a ThermoPro meat thermometer and it works great so when I needed an infrared thermometer for preheating
          my griddle there was no question. It's easy to use and easy to read. It uses two AA batteries (included) so
          you don't have to worry about charging it. Definitely recommend.
        </div>
        <div class="w-[128px] h-[95px] mt-4">
          <img class="w-full h-full" :src="TermMini" alt="">
        </div>
      </div>
      <div>
        <div class="flex items-center gap-3 mt-4">
          <div class="font-bold">
            Administration
          </div>
          <div class="text-[14px] text-[#666666] leading-8">
            18.09.2023
          </div>
        </div>
        <div class="leading-8 text-[14px]">
          Hello Bobobek. We thank you for your trust, purchase and high rating, your feedback is very important to us.
          We will be glad to see you again in our store 😊
        </div>
      </div>
      <button class="border p-3 rounded-lg mt-6 text-[#666666]">
        Barcha izohlarni ko’rish
      </button>
    </div>
    <div class="px-6 py-5 shadow-2xl flex flex-col items-center justify-center gap-3 rounded-2xl">
      <div class="w-[165px] h-[200px] flex items-center justify-center bg-[#F5F5F5]">
        <img class="w-[90%]" :src="productMask" alt="productMask">
      </div>
      <div class="text-[20px] whitespace-nowrap">
        Face Mask Thermometer
      </div>
      <div class="text-[18px] font-medium text-[#1272CC]">
        125 000 so’m
      </div>
      <div class="line-through font-light text-[14px]">
        150 000 so’m
      </div>
      <ButtonWithIcon class="w-[228px] flex items-center justify-center" text="Add to cart" text-color="#fff"
                      color="#1272CC" :icon="cart"/>
    </div>
  </div>
</template>

<script setup>
import { cart, productMask, stars, TermMini } from "@/shared/utils/images/index.js";
import { ButtonWithIcon } from "@/shared/buttons/index.js";
</script>

<style scoped>

</style>