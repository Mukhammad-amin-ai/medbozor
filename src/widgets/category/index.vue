<template>
  <div class="2xl:w-[1440px] mx-auto  px-3 py-3 2xl:px-12 mt-10 relative">
    <div class="text-center font-medium text-3xl">
      Bo’limlar
    </div>
    <div class="flex gap-8 mt-11 items-center flex-wrap">
      <!-- Item of Product Category -->
      <div class=" w-[425px] h-[240px] rounded-[20px] pt-10 px-5 pb-2 flex bg-no-repeat bg-contain"
           v-for="(item,index) in showedObj"
           :key="index"
           :style="{ backgroundImage: `url('_nuxt/src/shared/utils/images/category/${item.bg}')`}">
        <div class="w-[50%]">
          <div class="font-semibold text-[24px]"> {{ item.title }}</div>
          <button class="underline uppercase mt-5">Shop now +</button>
        </div>
        <div class="w-[50%] flex items-center justify-center">
          <img :src="item.img" alt="">
        </div>
      </div>
    </div>
    <div v-if="hide !== true"
         class="w-full h-[30%] bottom-0 left-0 bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,2)] absolute  z-5 flex items-end justify-center">
      <Button title="See all categories" color="white" bg-color="#1272CC" @click="hideButton"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Button } from "@/shared/buttons";
import {
  catProduct1,
  catProduct2,
  catProduct3,
  catProduct4,
  catProduct5,
  catProduct6,
  catProduct7,
  catProduct8,
  catProduct9,
  catProduct10,
  catProduct11,
  catProduct12,
  catProduct13,
  catProduct14,
  catProduct15,
  catProduct16,
  catProduct17,
  catProduct18
} from '@/shared/utils/images'

let hide = ref(false)

let hideButton = () => {
  hide.value = !hide.value
  showedObj.value = category.value
}

let showedObj = ref([])

const category = ref([
  {
    title: 'Tibbiy kiyim',
    bg: 'category-bg-1.svg',
    img: catProduct1
  },
  {
    title: 'Jarrohlik va reanimatsiya',
    bg: 'category-bg-3.svg',
    img: catProduct2
  },
  {
    title: 'Fizioterapiya va reobilitatsiya',
    bg: 'category-bg-6.svg',
    img: catProduct3
  },
  {
    title: 'Funktsional diagnostika',
    bg: 'category-bg-4.svg',
    img: catProduct4
  },
  {
    title: 'Akusherlik va ginekologiya',
    bg: 'category-bg-7.svg',
    img: catProduct5
  },
  {
    title: 'Oftalmologiya',
    bg: 'category-bg-1.svg',
    img: catProduct6
  },
  {
    title: 'Laboratoriya',
    bg: 'category-bg-6.svg',
    img: catProduct7
  },
  {
    title: 'Neonatologiya',
    bg: 'category-bg-4.svg',
    img: catProduct8
  },
  {
    title: 'Otorinolaringologiya',
    bg: 'category-bg-3.svg',
    img: catProduct9
  },
  {
    title: 'Rentgen va tomografiya',
    bg: 'category-bg-2.svg',
    img: catProduct10
  },
  {
    title: 'Stomatologiya',
    bg: 'category-bg-5.svg',
    img: catProduct11
  },
  {
    title: 'Sterilizatsiya va dezinfeksiya',
    bg: 'category-bg-4.svg',
    img: catProduct12
  },
  {
    title: 'Urologiya',
    bg: 'category-bg-1.svg',
    img: catProduct13
  },
  {
    title: 'Kosmetologiya',
    bg: 'category-bg-7.svg',
    img: catProduct14
  },
  {
    title: 'Tibbiy mebel',
    bg: 'category-bg-4.svg',
    img: catProduct15
  },
  {
    title: 'O’lchov uskunalari',
    bg: 'category-bg-7.svg',
    img: catProduct16
  },
  {
    title: 'Tibbiy ta’lim',
    bg: 'category-bg-6.svg',
    img: catProduct17
  },
  {
    title: 'Travmatologiya va ortopediya',
    bg: 'category-bg-3.svg',
    img: catProduct18
  }
])

let filter = () => {
  showedObj.value = category.value.slice(0, 9)
}

onMounted(() => {
  filter()
})

</script>

<style scoped>

</style>