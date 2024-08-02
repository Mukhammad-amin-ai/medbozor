<template>
  <div class="w-[40px] h-[40px] bg-[#F5F5F5] text-[14px] font-bold flex items-center justify-center uppercase">
    {{ size }}
  </div>
</template>

<script setup>
defineProps( {
  size: String,
} )

</script>

<style scoped>

</style>