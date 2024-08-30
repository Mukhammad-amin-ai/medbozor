<template>
  <div class="border-b border-gray-200">
    <BaseDiv class="custom-hidden h-0 lg:h-auto lg:visible lg:flex justify-between items-center">
      <div class="items-center gap-2 text-[#9DADCB] invisible h-0 lg:h-auto lg:visible lg:flex">
        <img :src="call" alt="img"/>
        +998901013636
      </div>
      <div class="gap-6 invisible h-0 lg:h-auto lg:visible lg:flex">
        <button class="flex items-center gap-2 text-[#9DADCB]">
          <img :src="shipping" alt="img"/>
          Buyurtmani kuzatish
        </button>
        <button class="flex items-center gap-2 text-[#9DADCB]">
          <img :src="heart" alt="img"/>
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
              <div class="flex items-center p-3 gap-3">
                <input v-if="lang.checked === true" type="radio" name="lang" id="lang" checked>
                <input v-else type="radio" name="lang" id="lang">
                <div class="flex items-center gap-2">
                  <img :src="lang.lang" alt="uz">
                  {{ lang.title }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </BaseDiv>
    <div class="visible flex px-6  py-3 lg:px-0 lg:py-0 lg:invisible justify-between h-auto lg:h-0">
      <nuxt-link to="/">
        <img :src="logo" alt="img"/>
      </nuxt-link>
      <div class="flex items-center gap-5">
        <div class="relative inline-flex items-center p-1 text-sm font-medium text-center text-black bg-transparent ">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.5 4.25C2.5 4.05109 2.57902 3.86032 2.71967 3.71967C2.86032 3.57902 3.05109 3.5 3.25 3.5H3.808C4.758 3.5 5.328 4.139 5.653 4.733C5.87 5.129 6.027 5.588 6.15 6.004C6.18327 6.00137 6.21663 6.00004 6.25 6H18.748C19.578 6 20.178 6.794 19.95 7.593L18.122 14.002C17.9581 14.5769 17.6114 15.0827 17.1343 15.4428C16.6572 15.803 16.0758 15.9979 15.478 15.998H9.53C8.92749 15.998 8.34165 15.8002 7.86252 15.4349C7.3834 15.0696 7.0375 14.557 6.878 13.976L6.118 11.204L4.858 6.956L4.857 6.948C4.701 6.381 4.555 5.85 4.337 5.454C4.128 5.069 3.96 5 3.809 5H3.25C3.05109 5 2.86032 4.92098 2.71967 4.78033C2.57902 4.63968 2.5 4.44891 2.5 4.25ZM9 21C9.53043 21 10.0391 20.7893 10.4142 20.4142C10.7893 20.0391 11 19.5304 11 19C11 18.4696 10.7893 17.9609 10.4142 17.5858C10.0391 17.2107 9.53043 17 9 17C8.46957 17 7.96086 17.2107 7.58579 17.5858C7.21071 17.9609 7 18.4696 7 19C7 19.5304 7.21071 20.0391 7.58579 20.4142C7.96086 20.7893 8.46957 21 9 21ZM16 21C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19C18 18.4696 17.7893 17.9609 17.4142 17.5858C17.0391 17.2107 16.5304 17 16 17C15.4696 17 14.9609 17.2107 14.5858 17.5858C14.2107 17.9609 14 18.4696 14 19C14 19.5304 14.2107 20.0391 14.5858 20.4142C14.9609 20.7893 15.4696 21 16 21Z"
                fill="#001233"/>
          </svg>
          <span class="sr-only">Notifications</span>
          <div
              class="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 border-2 border-transparent rounded-full -top-2 -end-2">
            20
          </div>
        </div>
        <img :src="menu" alt="menu"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { call, shipping, heart, uz, ru, eng, logo, menu } from "@/shared/utils/images";
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
  let lang = localStorage.getItem( 'selectedLanguage' )
  if (lang === null) {
    localStorage.setItem( 'selectedLanguage', JSON.stringify( language.value[0] ) );
  }
  langChecker()
} )
</script>
