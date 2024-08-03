<template>
  <div class="mt-6 flex gap-[60px]">
    <div class="flex gap-[20px]">
      <div class="flex flex-col items-center gap-3">
        <div class="w-[100px] h-[100px] flex items-center justify-center bg-[#F5F5F5]"
             v-for="(src, index) in images"
             :key="index"
             @click="() => showImg(index)"
        >
          <img class="w-[80%]" :src="src" alt="img"/>
        </div>
      </div>
      <div class="w-[420px] h-[500px] flex items-center justify-center bg-[#F5F5F5]" @click="() => showImg(0)">
        <img class="w-[80%]" :src="images[0]" alt="img"/>
      </div>
    </div>
    <div class="flex flex-col gap-[32px]">
      <div class="text-[36px]">
        Face Mask Thermometer
      </div>
      <div class="flex items-center gap-4">
        <div class="font-medium text-[22px] text-[#1272CC]">
          125 000 so’m
        </div>
        <div class="font-light line-through text-[20px]">
          150 000 so’m
        </div>
      </div>
      <div class="flex items-center gap-[22px]">
        <ButtonWithIcon :icon="EyeFill" text="9 marotaba ko’rilgan" color="#F2F8FE" textColor="#1272CC"/>
        <ButtonWithIcon :icon="HeartHollow" text="Add to wishlist" class="border" textColor="#023E7D"/>
      </div>
      <div class="flex items-center gap-5">
        <div>
          Rang:
        </div>
        <div class="flex items-center gap-2">
          <Color/>
          <Color bg-color="#A86060"/>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div>
          O’lcham:
        </div>
        <div class="flex items-center gap-2">
          <Size size="S"/>
          <Size size="M"/>
        </div>
      </div>
      <div class="flex items-center gap-5">
        <div class="w-[130px] rounded-lg flex items-center justify-center gap-2 px-3 py-4 bg-[#F5F5F5]">
          <button class="w-[20px] flex items-center justify-center h-[20px]">-</button>
          1
          <button class="w-[20px] flex items-center justify-center h-[20px]">+</button>
        </div>
        <ButtonWithIcon class="w-[351px] h-[52px] flex items-center justify-center" :icon="cart"
                        text="Savatchaga qo’shish" text-color="#fff" color="#1272CC"/>
      </div>
    </div>
  </div>
  <VueEasyLightbox
      :zoomDisabled="true"
      :moveDisabled="true"
      :visible="visibleRef"
      :imgs="images"
      :index="indexRef"
      @hide="onHide"
  />
</template>

<script setup>
import { productMask, HeartHollow, EyeFill, cart, Basket, ArrowBack, Box } from '@/shared/utils/images'
import { ButtonWithIcon } from '@/shared/buttons'
import Color from '@/shared/color/index.vue'
import Size from '@/shared/size/index.vue'

const visibleRef = ref( false );
const indexRef = ref( 0 );

const images = [
  productMask,
  productMask,
  productMask,
  productMask
];

const showImg = ( index ) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
</script>

<style>
.vel-toolbar {
  display: none;
}

.active-tab-bar{
  background-color: #F6F9FE;
  color: #1272CC;
}



</style>