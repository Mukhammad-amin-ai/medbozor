<template>
  <div class="w-[30px] h-[30px] rounded-[50%] border" :class="'bg-[' +bgColor + ']'"></div>
</template>

<script setup>
defineProps( {
  bgColor: String,
} )


</script>

<style scoped>

</style>