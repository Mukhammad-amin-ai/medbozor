<template>
  <button class="py-2 px-3 flex items-center gap-2 rounded-lg" :style="{ backgroundColor:color,color:textColor }">
    <img :src="icon" alt="prop">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  icon: String,
  text: String,
  color: String,
  textColor: String
})

</script>

<style scoped>


</style>