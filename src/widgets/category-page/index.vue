<template>
  <div>
    <CategoryHeader/>
    <div class="flex gap-10">
      <Sidebar/>
      <Products/>
    </div>
  </div>
</template>
<script setup>
import CategoryHeader from './ui/header.vue'
import Sidebar from './ui/sidebar.vue'
import Products from './ui/products.vue'
</script>

<style scoped>

</style>