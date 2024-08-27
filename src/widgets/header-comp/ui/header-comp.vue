<template>
  <div class="border-b border-gray-200">
    <BaseDiv class="invisible h-0 lg:h-auto lg:visible lg:flex py-0 px-0 lg:py-3 lg:px-3 justify-between items-center">
      <div class="items-center gap-2 text-[#9DADCB] invisible h-0 lg:h-auto lg:visible lg:flex">
        <call/>
        +998901013636
      </div>
      <div class="gap-6 invisible h-0 lg:h-auto lg:visible lg:flex">
        <button class="flex items-center gap-2 text-[#9DADCB]">
          <shipping/>
          Buyurtmani kuzatish
        </button>
        <button class="flex items-center gap-2 text-[#9DADCB]">
          <heart/>
          Wishlist
        </button>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                class="text-[#023E7D] gap-2 font-mediumtext-sm  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
          <img :src="getterLang.lang" alt="">
          {{ getterLang.title }}
          <svg class="w-2.5 h-2.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
               viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div id="dropdown"
             class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li v-for="(lang,index) in language" :key="index" @click="langChange(index)">
              <button class="flex items-center p-3 gap-3">
                <input v-if="lang.checked === true" type="radio" name="lang" id="lang" checked>
                <input v-else type="radio" name="lang" id="lang">
                <div class="flex items-center gap-2">
                  <img :src="lang.lang" alt="uz">
                  {{ lang.title }}
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </BaseDiv>
    <div class="visible flex px-6  py-3 lg:px-0 lg:py-0 lg:invisible justify-between h-auto lg:h-0">
      <logo/>
      <div class="flex items-center gap-6">
        <button
            class="relative inline-flex items-center p-2 text-sm font-medium text-center text-black bg-transparent ">
          <cart class="fill-black stroke-black text-black"/>
          <span class="sr-only">Notifications</span>
          <div
              class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            20
          </div>
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { call, shipping, heart, uz, ru, eng, logo, menu, cart } from "@/shared/utils/images";
import BaseDiv from "@/shared/base-div/base-div.vue";
import { onMounted } from "vue";

let getterLang = ref( {
  title: "O’zbek",
  lang: uz,
  checked: true,
  route: '/'
} )

let language = ref( [
  {
    title: "O’zbek",
    lang: uz,
    checked: false,
    route: '/'
  },
  {
    title: "Русский",
    lang: ru,
    checked: false,
    route: '/'
  },
  {
    title: "English",
    lang: eng,
    checked: false,
    route: '/'
  }
] )

let langChange = ( index ) => {
  language.value.forEach( ( item, idx ) => {
    item.checked = idx === index;
  } );

  window.location.href = language.value[index].route;
  localStorage.setItem( 'selectedLanguage', JSON.stringify( language.value[index] ) );
}

let langChecker = () => {
  getterLang.value = JSON.parse( localStorage.getItem( 'selectedLanguage' ) );
  language.value.forEach( ( item ) => {
    item.checked = item.title === getterLang.value.title;
  } );
}

onMounted( () => {
  langChecker()
} )

</script>
