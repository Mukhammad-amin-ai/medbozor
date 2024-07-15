<template>
  <div class="bg-[#F6F9FE] mt-10">
    <div class="2xl:w-[1440px] mx-auto px-3 py-9 2xl:px-[144px] flex items-center gap-[60px]  ">
      <div v-for="(item,index) in adds" :key="index" class="py-10 px-5  rounded-2xl" :style="{backgroundColor:item.bg}">
        <div class="w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
             :style="{backgroundColor:item.bgIcon}">
          <img :src=" item.img" alt="">
        </div>
        <div>
          {{ item.title }}
        </div>
        <div>
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { elipsHat, elipsPlus, elipsEngeener } from '@/shared/utils/images'

const adds = ref([
  {
    img: elipsHat,
    title: "Master Klasslar",
    bg: '#EAF2FF',
    bgIcon:"#DCEBFE",
    description: "Mutaxassislar tomonidan zamonaviy master klasslar",
  },
  {
    img: elipsPlus,
    title: "Tibbiyot bozori",
    bg: '#FDF8C1',
    bgIcon:"#FFF48B",
    description: "Mutaxassislar tomonidan zamonaviy master klasslar",
  },
  {
    img: elipsEngeener,
    title: "Injenerlik xizmati",
    bg: '#FDE6F2',
    bgIcon:"#FDCDE6",
    description: "Mutaxassislar tomonidan zamonaviy master klasslar",
  }
])

</script>

<style scoped>

</style>