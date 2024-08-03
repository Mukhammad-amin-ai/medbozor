<template>
  <div>
    <CategoryHeader/>
    <div class="flex gap-10">
      <Sidebar/>
      <Products/>
<!--      <NotFound/>-->
    </div>
  </div>
</template>
<script setup>
import CategoryHeader from './ui/header.vue'
import Sidebar from './ui/sidebar.vue'
import Products from './ui/products.vue'
import NotFound from './ui/not-found.vue'
</script>

<style scoped>

</style>