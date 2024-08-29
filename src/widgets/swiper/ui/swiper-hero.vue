<template>
  <div class="bg-[#F6F9FE]">
    <div class="2xl:w-[1440px] mx-auto p-5 md:p-0">
      <form class=" max-w-md mx-auto md:hidden">
        <label for="default-search"
               class=" mb-2 text-sm font-medium  sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img :src="search" alt="">
          </div>
          <input type="search" id="default-search"
                 class=" w-full md:w-[400px] h-[35px] p-4 ps-10 text-[#9DADCB] placeholder:text-[#9DADCB] border border-[#E4E9F1]  rounded-md  "
                 placeholder="Qidirish matni" required/>
        </div>
      </form>
      <swiper
          :cssMode="true"
          :navigation="true"
          :pagination="true"
          :mousewheel="true"
          :keyboard="true"
          :modules="modules"
          class="h-auto md:h-[424px]"
      >
        <swiper-slide
            class="justify-center bg-[url('../../shared/utils/images/background/bg-swiper-sm.svg')]  md:bg-[url('../../shared/utils/images/background/bg-swiper.svg')] bg-no-repeat bg-[center_top_1rem]   md:bg-center lg:bg-cover"
            style="display: flex !important;">
          <div class="w-[85%] flex flex-col-reverse md:flex-row">
            <div class="w-full md:w-[50%] mt-10 relative">
              <div class="font-medium text-[#1272CC]">CATEGORY</div>
              <div class="text-[48px]  md:text-[65px]">Face Mask Thermometer</div>
              <div class="mb-3">Model: 18086-1</div>
              <Button title="Batafsil ko’rish" color="#fff" bg-color="#1272CC"/>
            </div>
            <div class="w-full md:w-[50%] relative flex items-center justify-center">
              <img class="w-[50%] md:w-[60%]" :src="productMask" alt="product">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
            class="justify-center bg-[url('../../shared/utils/images/background/bg-swiper-sm.svg')]  md:bg-[url('../../shared/utils/images/background/bg-swiper.svg')] bg-no-repeat bg-[center_top_1rem]   md:bg-center lg:bg-cover"
            style="display: flex !important;">
          <div class="w-[85%] flex flex-col-reverse md:flex-row">
            <div class="w-full md:w-[50%] mt-10 relative">
              <div class="font-medium text-[#1272CC]">CATEGORY</div>
              <div class="text-[48px]  md:text-[65px]">Face Mask Thermometer</div>
              <div class="mb-3">Model: 18086-1</div>
              <Button title="Batafsil ko’rish" color="#fff" bg-color="#1272CC"/>
            </div>
            <div class="w-full md:w-[50%] relative flex items-center justify-center">
              <img class="w-[50%] md:w-[60%]" :src="productMask" alt="product">
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
            class="justify-center bg-[url('../../shared/utils/images/background/bg-swiper-sm.svg')]  md:bg-[url('../../shared/utils/images/background/bg-swiper.svg')] bg-no-repeat bg-[center_top_1rem]   md:bg-center lg:bg-cover"
            style="display: flex !important;">
          <div class="w-[85%] flex flex-col-reverse md:flex-row">
            <div class="w-full md:w-[50%] mt-10 relative">
              <div class="font-medium text-[#1272CC]">CATEGORY</div>
              <div class="text-[48px]  md:text-[65px]">Face Mask Thermometer</div>
              <div class="mb-3">Model: 18086-1</div>
              <Button title="Batafsil ko’rish" color="#fff" bg-color="#1272CC"/>
            </div>
            <div class="w-full md:w-[50%] relative flex items-center justify-center">
              <img class="w-[50%] md:w-[60%]" :src="productMask" alt="product">
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
import { productMask, search } from "@/shared/utils/images/index.js";
import { Button } from "@/shared/buttons/index.js";

let modules = ref( [ Navigation, Pagination, Mousewheel, Keyboard ] )
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

@media screen and (max-width: 760px) {
  .swiper-pagination {
    display: none !important;
  }

  .swiper-button-next {
    top: 95% !important;
    right: 3vw !important;
  }

  .swiper-button-prev {
    top: 95% !important;
    left: calc(100% - 20vw) !important;
  }

  .swiper-slide {
    width: 100% !important;
    height: 550px !important;
  }

}

</style>