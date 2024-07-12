<template>
  <div class="px-3 py-3 2xl:px-24 flex justify-between items-center border-b border-gray-200">
    <div class="flex items-center gap-2 text-[#9DADCB]">
      <img :src="call" alt="call-icon">
      +998901013636
    </div>
    <div class="flex gap-6">
      <button class="flex items-center gap-2 text-[#9DADCB]">
        <img :src="shipping" alt="shipping">
        Buyurtmani kuzatish
      </button>
      <button class="flex items-center gap-2 text-[#9DADCB]">
        <img :src="heart" alt="heart">
        Wishlist
      </button>
      <!-- Language Drop-down -->
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
              class="text-[#023E7D] gap-2 font-mediumtext-sm  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button">
        <img :src="uz" alt="">
        O’zbek
        <svg class="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <button class="flex items-center p-3 gap-3">
              <input type="radio" name="" id="">
              <div class="flex items-center gap-2">
                <img :src="uz" alt="uz">
                O’zbek
              </div>
            </button>
          </li>
          <li>
            <button class="flex items-center p-3 gap-3">
              <input type="radio" name="" id="">
              <div class="flex items-center gap-2">
                <img :src="ru" alt="ru">
                Русский
              </div>
            </button>
          </li>
          <li>
            <button class="flex items-center p-3 gap-3">
              <input type="radio" name="" id="">
              <div class="flex items-center gap-2">
                <img :src="eng" alt="eng">
                English
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { call, shipping, heart } from "~/app/assets/icons/index.js";
import { uz, ru, eng } from '~/app/assets/images/index.js'
</script>

<style scoped>

</style>