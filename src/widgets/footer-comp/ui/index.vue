<template>
  <div class="bg-[#E4E9F1] mt-10">
    <div class="2xl:w-[1440px] py-[60px] mx-auto px-3 2xl:px-[100px] ">
      <div class="gap-3 md:gap-0 flex-col md:flex-row flex items-start justify-between">
        <div>
          <div>
            <img :src="LogoFooter" alt="">
          </div>
          <div class="w-[280px] mt-6">
            <div class="text-[#001233]">
              Saytda xatolik aniqladingizmi?
            </div>
            <div class="text-[#001233]">
              Matnni belgilab <span class="text-[#1272CC]">Ctrl+ Enter</span> ni bosing
            </div>
          </div>
          <div class="mt-6 flex items-center gap-4">
            <button class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border border-[#9DADCB]">
              <img :src="tikTok" alt="">
            </button>
            <button class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border border-[#9DADCB]">
              <img :src="telegram" alt="">
            </button>
            <button class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border border-[#9DADCB]">
              <img :src="instagram" alt="">
            </button>
            <button class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border border-[#9DADCB]">
              <img :src="facebook" alt="">
            </button>
          </div>
        </div>
        <div>
          <div class="text-[#001233] font-semibold text-[20px]">
            About us
          </div>
          <ul class="mt-6">
            <li class="text-[#001233]">
              Subcategory 1
            </li>
            <li class="text-[#001233] mt-4">
              Subcategory 2
            </li>
            <li class="text-[#001233] mt-4">
              Subcategory 3
            </li>
            <li class="text-[#001233] mt-4">
              Subcategory 4
            </li>
          </ul>
        </div>
        <div>
          <div class="text-[#001233] font-semibold text-[20px]">
            Categories
          </div>
          <ul class="mt-6">
            <li class="text-[#001233]">
              Tibbiy kiyimlar
            </li>
            <li class="text-[#001233] mt-4">
              Tibbiy uskunalar
            </li>
            <li class="text-[#001233] mt-4">
              Stomatologiya
            </li>
            <li class="text-[#001233] mt-4">
              Akusherlik va ginekologiya
            </li>
            <li class="text-[#001233] mt-4">
              Urologiya
            </li>
          </ul>
        </div>
        <div>
          <div class="text-[#001233] font-semibold text-[20px]">
            Contact us
          </div>
          <div class="mt-6">
            <div class="flex items-center gap-4">
              <div class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border border-[#9DADCB]">
                <img :src="mapLocation" alt="">
              </div>
              <div class="w-[220px]">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </div>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <div class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border border-[#9DADCB]">
                <img :src="callFooter" alt="">
              </div>
              <div class="w-[220px]">
                +998901013636
              </div>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <div class="rounded-[50%] w-[40px] h-[40px] flex items-center justify-center border border-[#9DADCB]">
                <img :src="massage" alt="">
              </div>
              <div class="w-[220px]">
                medbozor@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#D4DCE9] text-center py-3 text-[14px]">
      Medbozor 2023©, Barcha huquqlar himoyalangan
    </div>
  </div>

</template>

<script setup>
import { LogoFooter } from '@/shared/utils/images'
import { tikTok, telegram, instagram, facebook, massage, mapLocation, callFooter } from '@/shared/utils/images'
</script>
