<template>
  <div class="sm:mt-10 pb-[62px] flex justify-center items-center">
    <div class="w-full bg-[#F6F9FE] p-8 sm:w-[464px] rounded-lg">
      <div class="text-2xl font-semibold">
        Ro’yxatdan o’tish
      </div>
      <div class="mt-8">
        <form class="max-w-sm mx-auto">
          <div class="mb-7 flex-col sm:flex-row flex items-start sm:items-center gap-7 ">
            <div class="w-full sm:w-50">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ism</label>
              <input type="text" id="name"
                     class="mt-3 border-none text-sm rounded-lg block w-full p-2.5"
                     placeholder="Bobobek" required/>
            </div>
            <div class="w-full sm:w-50">
              <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Familiya</label>
              <input type="text" id="surname"
                     class="mt-3 border-none text-sm rounded-lg block w-full p-2.5"
                     placeholder="Turdiyev" required/>
            </div>
          </div>
          <div class="mb-7">
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon
              raqam</label>
            <input type="number" id="number"
                   class="mt-3 border-none text-sm rounded-lg block w-full p-2.5"
                   placeholder="+998" required/>
          </div>
          <div class="mb-7">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Parol</label>
            <input type="password" id="password"
                   class="mt-3 border-none text-sm rounded-lg block w-full p-2.5"
                   required/>
          </div>
          <div class="mb-7">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Parolni qaytaring</label>
            <input type="password" id="password"
                   class="mt-3 border-none text-sm rounded-lg block w-full p-2.5"
                   required/>
          </div>
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input id="remember" type="checkbox" value=""
                     class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                     required/>
            </div>
            <label for="remember" class="ms-2 text-xs xs:text-sm font-medium text-gray-900 dark:text-gray-300">Xizmat va shartlarga
              rozilik bildirasizmi?</label>
          </div>
          <Button class="mt-7 py-4 w-full" title="Ro’yxatdan o’tish" color="#fff" bg-color="#1272CC"/>
          <div class="mt-7 text-center">
            <NuxtLink to='/sign-in'>
              Akkauntingiz bormi?
            </NuxtLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/shared/buttons";
</script>
