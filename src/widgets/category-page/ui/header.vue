<template>
  <div class="flex items-center justify-between">
    <div class="font-medium">
      <span class="font-bold">“Tibbiy kiyim” </span> uchun 100 ta natija mavjud
    </div>
    <div class="flex items-center justify-between">
      <span class="text-[#9DADCB]">Saralash</span>
      <div class="flex items-center justify-center p-4">
        <button id="dropdownDefault" data-dropdown-toggle="dropdown-category"
                class="w-[200px] flex items-center justify-between p-2 border rounded-[6px] "
                type="button">
          Ommabop
          <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div id="dropdown-category" class="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul class="space-y-2 text-sm" aria-labelledby="dropdownDefault">
            <li class="flex items-center">
              <input id="apple" type="checkbox" value=""
                     class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
              <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Apple (56)
              </label>
            </li>
            <li class="flex items-center">
              <input id="fitbit" type="checkbox" value=""
                     class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>

              <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                Fitbit (56)
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
