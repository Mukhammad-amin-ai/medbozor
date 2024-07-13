<template>
  <div class="bg-[#D3E4FE]">
    <div class="2xl:w-[1440px] mx-auto">
      <swiper
          :cssMode="true"
          :navigation="true"
          :pagination="true"
          :mousewheel="true"
          :keyboard="true"
          :modules="modules"
          class="h-[424px]"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

let modules = ref([ Navigation, Pagination, Mousewheel, Keyboard ])

</script>

<style scoped>

</style>