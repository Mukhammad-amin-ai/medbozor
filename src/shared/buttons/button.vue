<template>
  <button class="p-[10px] rounded-[8px]" :style="{color:color,backgroundColor:bgColor}">
    {{ title }}
  </button>
</template>

<script setup>
defineProps({
  color: String,
  bgColor: String,
  title: String,
})

</script>

<style scoped>

</style>