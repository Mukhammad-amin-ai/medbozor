<template>
  <div class="mt-6 flex items-center gap-1">
    <div class="text-[#1272CC]">
      {{ title }}
    </div>
    /
    <div class="text-[#1272CC]">
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
})

</script>

<style scoped>

</style>