<template>
  <div class="w-[280px] h-[445px]">
    <div>
      <img :src="img" alt="product">
    </div>
    <div class="mt-4">
      <div class="text-[18px]">{{ title }}</div>
      <div class="text-[#1272CC]">{{ price }} so’m</div>
      <div class="line-through" v-if="hasDiscount">{{ discount }} so’m</div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: String,
  img: String,
  price: String,
  discount: String,
  hasDiscount: Boolean
})

</script>

<style scoped>

</style>