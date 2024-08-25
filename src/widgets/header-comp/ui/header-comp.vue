<template>
  <div class="border-b border-gray-200">
    <BaseDiv class="flex justify-between items-center">
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
  </div>
</template>

<script setup>
import { call, shipping, heart, uz, ru, eng } from "@/shared/utils/images/index.js";
import BaseDiv from "@/shared/base-div/base-div.vue";
import { onMounted } from "vue";

let getterLang = ref({
  title: "O’zbek",
  lang: uz,
  checked: true,
  route: '/'
})

let language = ref([
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
    ]
)

let langChange = (index) => {
  language.value.forEach((item, idx) => {
    item.checked = idx === index;
  });

  window.location.href = language.value[index].route;
  localStorage.setItem('selectedLanguage', JSON.stringify(language.value[index]));
}

let langChecker = () => {
  getterLang.value = JSON.parse(localStorage.getItem('selectedLanguage'));
  language.value.forEach((item) => {
    item.checked = item.title === getterLang.value.title;
  });
}

onMounted(() => {
  langChecker()
})

</script>
