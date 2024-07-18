<template>
  <div>
    <div id="Profile-modal" tabindex="-1" aria-hidden="true"
         class=" bg-[rgba(0,0,0,0.5)] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full">
      <div class="relative w-[450px] max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-2xl p-6 shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between rounded-2xl dark:border-gray-600">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
              Shaxsiy ma’lumotlarim
            </h3>
            <button type="button"
                    class="text-gray-400 bg-transparent w-6 h-6 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="Profile-modal">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="mt-6">
            <form>
              <div class="mb-6">
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Ism</label>
                <input type="text" id="text"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
              <div class="mb-6">
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Familiya</label>
                <input type="text" id="text"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
              <div class="mb-6">
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Telefon raqam</label>
                <input type="text" id="text"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-between">
            <button class="py-4 px-[66px] rounded-[6px] font-medium text-[#9DADCB] border border-[#E4E9F1]" >Orqaga</button>
            <button class="py-4 px-5 bg-[#1272CC] rounded-[6px] text-white font-medium" >Ma’lumotni saqlash</button>
          </div>
        </div>
      </div>
    </div>
    <div id="Password-modal" tabindex="-1" aria-hidden="true"
         class=" bg-[rgba(0,0,0,0.5)] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full">
      <div class="relative w-[450px] max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-2xl p-6 shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between rounded-2xl dark:border-gray-600">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
              Parol
            </h3>
            <button type="button"
                    class="text-gray-400 bg-transparent w-6 h-6 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="Password-modal">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="mt-6">
            <form>
              <div class="mb-6">
                <label for="password1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Eski parol</label>
                <input type="password" id="password1"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
              <div class="mb-6">
                <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Yangi parol</label>
                <input type="password" id="password2"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
              <div class="mb-6">
                <label for="password3" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Yangi parolni qaytaring</label>
                <input type="password" id="password3"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-between">
            <button class="py-4 px-[66px] rounded-[6px] font-medium text-[#9DADCB] border border-[#E4E9F1]" >Orqaga</button>
            <button class="py-4 px-5 bg-[#1272CC] rounded-[6px] text-white font-medium" >Parolni yangilash</button>
          </div>
        </div>
      </div>
    </div>
    <div id="Address-modal" tabindex="-1" aria-hidden="true"
         class=" bg-[rgba(0,0,0,0.5)] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full">
      <div class="relative w-[450px] max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-2xl p-6 shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between rounded-2xl dark:border-gray-600">
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
              Manzil
            </h3>
            <button type="button"
                    class="text-gray-400 bg-transparent w-6 h-6 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="Address-modal">
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="mt-6">
            <form>
              <div class="mt-6">
                <div>Davlat</div>
                  <select id="countries" class="mt-4 text-sm rounded-lg block w-full p-2.5">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
              </div>
              <div class="mt-6 flex items-center justify-between">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Viloyat</label>
                  <select id="countries" class="mt-4 text-sm rounded-lg block w-full p-2.5">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div>
                  <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shahar</label>
                  <input type="text" id="surname"
                         class="mt-3  text-sm rounded-lg block w-full p-2.5"
                          required/>
                </div>
              </div>
              <div class="mt-6">
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Manzil </label>
                <input type="text" id="text"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
              <div class="mt-6">
                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Manzil haqida qo’shimcha ma’lumot (ixtiyoriy)</label>
                <input type="text" id="text"
                       class="bg-white rounded-lg focus:ring-blue-500  block w-full p-2.5 "
                       required/>
              </div>
            </form>
          </div>
          <!-- Modal footer -->
          <div class=" mt-6 flex items-center justify-between">
            <button class="py-4 px-[66px] rounded-[6px] font-medium text-[#9DADCB] border border-[#E4E9F1]" >Orqaga</button>
            <button class="py-4 px-5 bg-[#1272CC] rounded-[6px] text-white font-medium" >Ma’lumotni saqlash</button>
          </div>
        </div>
      </div>
    </div>
    <div id="logout-modal" tabindex="-1" class="bg-[rgba(0,0,0,0.5)] hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[100%] max-h-full">
      <div class="relative p-6 w-[450px]">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-4 text-center flex justify-center flex-col items-center">
            <h3 class="mb-5 w-[90%] text-lg font-normal text-center">Rostdan ham tizimdan chiqib ketmoqchimisiz?</h3>
            <div class="flex items-center gap-2 justify-between">
              <button class="py-4 px-[66px] rounded-[6px] font-medium text-[#9DADCB] border border-[#E4E9F1]" >Orqaga</button>
              <button class="py-4 px-[40px] bg-[#FA3C3C] rounded-[6px] text-white font-medium" >Chiqib ketish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>