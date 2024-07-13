<template>
  <div class="py-2 px-3 flex items-center gap-2 custom-bg" :style="{ backgroundColor:color,color:textColor }">
    <img :src="icon" alt="prop">
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  text: String,
  color: String,
  textColor:String
})

</script>

<style scoped>
.custom-bg {
  border-radius: 8px;
}

</style>