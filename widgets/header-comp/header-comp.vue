<template>
  <div class="md:px-24 px-3 py-3 flex justify-between border-b border-gray-200">
    <div class="flex gap-2 text-[#9DADCB]">
      <img :src="call" alt="call-icon">
      +998901013636
    </div>
    <div class="flex gap-6">
      <button class="flex gap-2 text-[#9DADCB]">
        <img :src="shipping" alt="shipping">
        Buyurtmani kuzatish
      </button>
      <button class="flex gap-2 text-[#9DADCB]">
        <img :src="heart" alt="heart">
        Wishlist
      </button>
      <!-- Language Drop-down -->
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
              class="text-[#9DADCB] gap-2 font-mediumtext-sm  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            <a href="#"
               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#"
               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#"
               class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
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