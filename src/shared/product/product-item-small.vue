<template>
  <div class=" w-[155px] md:w-[280px] h-[310px] md:h-[445px] relative">
    <div v-if="count"
         class="w-[24px] md:w-[40px] h-[24px] md:h-[40px] text-[14px] flex items-center justify-center absolute bottom-[46.5%] right-0 bg-white cursor-pointer">
      1x
    </div>
    <div>
      <img :src="img" alt="product">
    </div>
    <div class="mt-1">
      <div class="text-[14px]">{{ title }}</div>
      <div class="text-[14px] text-[#787878]">{{ color }}</div>
      <div class="text-[#1272CC] text-[14px] font-medium">{{ price }} so’m</div>
      <div class="line-through text-[12px]" v-if="hasDiscount">{{ discount }} so’m</div>
    </div>
  </div>
</template>

<script setup>
defineProps( {
  title: String,
  img: String,
  price: String,
  discount: String,
  color: String,
  hasDiscount: Boolean,
  count: Boolean
} )
</script>
