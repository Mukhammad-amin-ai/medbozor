<template>
  <div class="mt-10 flex justify-center items-center">
    <div class="bg-[#F6F9FE] p-8 w-[464px] h-[486px] rounded-lg">
      <div class="text-2xl font-semibold">
        Tizimga kirish
      </div>
      <div class="mt-8">
        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <label for="number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Telefon raqam</label>
            <input type="number" id="number"
                   class="mt-3 border-none text-gray-900 text-sm rounded-lg block w-full p-2.5"
                   placeholder="+998" required/>
          </div>
          <div class="mb-7">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Parol</label>
            <input type="password" id="password"
                   class="mt-3 border-none text-sm rounded-lg block w-full p-2.5"
                   required/>
          </div>
          <div class="mt-3 text-end text-[14px]">
            Parolni unutdingizmi?
          </div>
          <Button class="mt-8 w-full" title="Kirish" color="#fff" bg-color="#1272CC"/>
          <div class="mt-7 text-center">
            <NuxtLink to='/sign-up'>
              Ro’yxatdan o’tganmisiz?
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

<style scoped>

</style>