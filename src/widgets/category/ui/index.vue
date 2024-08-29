<template>
  <div class="2xl:w-[1440px] mx-auto  px-3 py-3 2xl:px-12 mt-10 relative">
    <div class="text-center font-medium text-3xl" @click="widthCalc">
      Bo’limlar
    </div>
    <div class="flex gap-8 mt-11 items-center flex-wrap justify-center">
      <div
          class="w-[168px] h-[238px] md:w-[425px] md:h-[240px] rounded-[20px] pt-6 md:pt-10 px-4  md:px-5 pb-2 flex-col md:flex-row flex items-end justify-between md:items-start bg-no-repeat bg-contain"
          v-for="(item,index) in showedObj"
          :key="index"
          :style="{
           backgroundImage: md
            ? `url('https://medbozor.vercel.app/images/category/${item.bg}')`
            : `url('https://medbozor.vercel.app/images/category/${item.sm}')`
           }">
        <div class="w-full md:w-[50%]">
          <div class="font-semibold text-[18px  ] md:text-[24px]"> {{ item.title }}</div>
          <button class="underline uppercase mt-5">Shop now +</button>
        </div>
        <div class="w-[65%] md:w-[50%] flex items-center justify-center">
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
import { Button } from "@/shared/buttons/index.js";
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
} from '@/shared/utils/images/index.js'

let hide = ref( false )

let hideButton = () => {
  hide.value = !hide.value
  showedObj.value = category.value
}

let showedObj = ref( [] )

const category = ref( [
  {
    title: 'Tibbiy kiyim',
    bg: 'categoryBg1.svg',
    img: catProduct1,
    sm: 'CategoryBg1Sm.svg'
  },
  {
    title: 'Jarrohlik va reanimatsiya',
    bg: 'categoryBg3.svg',
    img: catProduct2,
    sm: 'CategoryBg3Sm.svg'
  },
  {
    title: 'Fizioterapiya va reobilitatsiya',
    bg: 'categoryBg6.svg',
    img: catProduct3,
    sm: 'CategoryBg6Sm.svg'
  },
  {
    title: 'Funktsional diagnostika',
    bg: 'categoryBg4.svg',
    img: catProduct4,
    sm: 'CategoryBg4Sm.svg'
  },
  {
    title: 'Akusherlik va ginekologiya',
    bg: 'categoryBg7.svg',
    img: catProduct5,
    sm: 'CategoryBg7Sm.svg'
  },
  {
    title: 'Oftalmologiya',
    bg: 'categoryBg1.svg',
    img: catProduct6,
    sm: 'CategoryBg1Sm.svg'
  },
  {
    title: 'Laboratoriya',
    bg: 'categoryBg6.svg',
    img: catProduct7,
    sm: 'CategoryBg6Sm.svg'
  },
  {
    title: 'Neonatologiya',
    bg: 'categoryBg4.svg',
    img: catProduct8,
    sm: 'CategoryBg4Sm.svg'
  },
  {
    title: 'Otorinolaringologiya',
    bg: 'categoryBg3.svg',
    img: catProduct9,
    sm: 'CategoryBg3Sm.svg'
  },
  {
    title: 'Rentgen va tomografiya',
    bg: 'categoryBg2.svg',
    img: catProduct10,
    sm: 'CategoryBg2Sm.svg'
  },
  {
    title: 'Stomatologiya',
    bg: 'categoryBg5.svg',
    img: catProduct11,
    sm: 'CategoryBg5Sm.svg'
  },
  {
    title: 'Sterilizatsiya va dezinfeksiya',
    bg: 'categoryBg4.svg',
    img: catProduct12,
    sm: 'CategoryBg4Sm.svg'
  },
  {
    title: 'Urologiya',
    bg: 'categoryBg1.svg',
    img: catProduct13,
    sm: 'CategoryBg1Sm.svg'
  },
  {
    title: 'Kosmetologiya',
    bg: 'categoryBg7.svg',
    img: catProduct14,
    sm: 'CategoryBg7Sm.svg'
  },
  {
    title: 'Tibbiy mebel',
    bg: 'categoryBg4.svg',
    img: catProduct15,
    sm: 'CategoryBg4Sm.svg'
  },
  {
    title: 'O’lchov uskunalari',
    bg: 'categoryBg7.svg',
    img: catProduct16,
    sm: 'CategoryBg7Sm.svg'
  },
  {
    title: 'Tibbiy ta’lim',
    bg: 'categoryBg6.svg',
    img: catProduct17,
    sm: 'CategoryBg6Sm.svg'
  },
  {
    title: 'Travmatologiya va ortopediya',
    bg: 'categoryBg3.svg',
    img: catProduct18,
    sm: 'CategoryBg3Sm.svg'
  }
] )

let filter = () => {
  showedObj.value = category.value.slice( 0, 9 )
}

let widthCalc = () => {
  console.log( window.innerWidth )
}


let md = ref( false )

onMounted( () => {
  md.value = window.innerWidth > 768;
  filter()
} )

</script>

<style scoped>

</style>