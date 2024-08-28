<template>
  <BaseDiv class="flex items-center justify-between">
    <div>
      <NuxtLink to="/">
        <img :src="logo" alt="">
      </NuxtLink>
    </div>
    <div class="flex items-center gap-5 xl:gap-24">
      <div class="flex items-center gap-5">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown-category"
                class="text-[#023E7D] flex items-center gap-1" type="button">
          <img :src="category" alt="">
          Kategoriyalar
        </button>
        <div id="dropdown-category"
             class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                out</a>
            </li>
          </ul>
        </div>
        <form class="max-w-md mx-auto">
          <label for="default-search"
                 class="mb-2 text-sm font-medium  sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <img :src="search" alt="">
            </div>
            <input type="search" id="default-search"
                   class=" w-[400px] h-[35px] p-4 ps-10 text-[#9DADCB] placeholder:text-[#9DADCB] border border-[#E4E9F1]  rounded-md  "
                   placeholder="Qidirish matni" required/>
          </div>
        </form>
      </div>
      <div class="flex items-center gap-5">
        <NuxtLink href="/profile/settings">
          <ButtonWithIcon :icon="cart" text="My cart" color="#1272CC" textColor="#fff"/>
        </NuxtLink>
        <NuxtLink to="/sign-in">
          <ButtonWithIcon :icon="user" text="Sign in" color="transparent" textColor="#9DADCB"/>
        </NuxtLink>
      </div>
    </div>
  </BaseDiv>
</template>

<script setup>
import { category, search, cart, user, logo } from '@/shared/utils/images'
import { ButtonWithIcon } from "@/shared/buttons";
import BaseDiv from "@/shared/base-div/base-div.vue";
</script>