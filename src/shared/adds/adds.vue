<template>
  <div class="bg-[#EAF2FF]">
    <div class="2xl:w-[1440px] mx-auto px-3 py-8 2xl:px-[90px] flex-col md:flex-row gap-10 flex items-center justify-between ">
      <div class="flex items-center gap-5" v-for="(item,index) in adds" :key="index">
        <img :src="item.img" alt="">
        <div class="w-[270px] md:w-auto">
          <div class="font-medium text-black text-[20px]">
            {{ item.title }}
          </div>
          <div class="text-[14px]">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { shieldStar, shieldRepeat, shieldShip } from '@/shared/utils/images'

const adds = ref( [
  {
    title: 'Sifatli Mahsulotlar',
    description: 'Barcha mahsulotlarimiz sertifikatlangan',
    img: shieldStar
  },
  {
    title: 'Xavfsiz to’lov usullari',
    description: 'Bir nechta to\'lov imkoniyatlari',
    img: shieldRepeat
  },
  {
    title: 'Ishonchli yetkazmalar',
    description: 'Siz aytgan hududga yetkazib beriladi',
    img: shieldShip
  }
] )

</script>

<style scoped>

</style>