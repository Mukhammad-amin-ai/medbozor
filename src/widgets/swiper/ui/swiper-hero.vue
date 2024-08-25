<template>
  <div class="bg-[#F6F9FE] ">
    <div class="2xl:w-[1440px] mx-auto ">
      <swiper
          :cssMode="true"
          :navigation="true"
          :pagination="true"
          :mousewheel="true"
          :keyboard="true"
          :modules="modules"
          class="h-[424px]"
      >
        <swiper-slide class="justify-center bg-[url('../../shared/utils/images/background/bg-swiper.svg')] bg-no-repeat bg-center lg:bg-cover" style="display: flex !important;">
          <div class="w-[85%] flex">
            <div class="w-[50%] mt-10 relative">
              <div class="font-medium text-[#1272CC] ">CATEGORY</div>
              <div class="text-[65px]">Face Mask Thermometer</div>
              <div class="mb-3">Model: 18086-1</div>
              <Button title="Batafsil ko’rish" color="#fff" bg-color="#1272CC"/>
            </div>
            <div class="w-[50%] relative flex items-center justify-center">
              <img :src="productMask" alt="product">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="justify-center bg-[url('../../shared/utils/images/background/bg-swiper.svg')] bg-no-repeat bg-center lg:bg-cover" style="display: flex !important;">
          <div class="w-[85%] flex">
            <div class="w-[50%] mt-10 relative">
              <div class="font-medium text-[#1272CC] ">CATEGORY</div>
              <div class="text-[65px]">Face Mask Thermometer</div>
              <div class="mb-3">Model: 18086-1</div>
              <Button title="Batafsil ko’rish" color="#fff" bg-color="#1272CC"/>
            </div>
            <div class="w-[50%] relative flex items-center justify-center">
              <img :src="productMask" alt="product">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="justify-center bg-[url('../../shared/utils/images/background/bg-swiper.svg')] bg-no-repeat bg-center lg:bg-cover" style="display: flex !important;">
          <div class="w-[85%] flex">
            <div class="w-[50%] mt-10 relative">
              <div class="font-medium text-[#1272CC] ">CATEGORY</div>
              <div class="text-[65px]">Face Mask Thermometer</div>
              <div class="mb-3">Model: 18086-1</div>
              <Button title="Batafsil ko’rish" color="#fff" bg-color="#1272CC"/>
            </div>
            <div class="w-[50%] relative flex items-center justify-center">
              <img :src="productMask" alt="product">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { productMask } from "@/shared/utils/images/index.js";
import { Button } from "@/shared/buttons/index.js";

let modules = ref([ Navigation, Pagination, Mousewheel, Keyboard ])
</script>

<style>
.swiper-button-prev,
.swiper-button-next {
  width: 48px !important;
  height: 48px !important;
  background-color: #fff !important;
  border-radius: 50% !important;
  border: 1px solid #9DADCB !important;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 16px !important;
}

.swiper-pagination {
  width: 22% !important;
  position: absolute !important;
  top: 83% !important;
  left: 0 !important;
}

.swiper-pagination-bullet {
  width: 25px !important;
  height: 3px !important;
  border-radius: 0 !important;
}

</style>