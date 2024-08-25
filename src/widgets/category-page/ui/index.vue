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
import CategoryHeader from './header.vue'
import Sidebar from './sidebar.vue'
import Products from './products.vue'
import NotFound from './not-found.vue'
</script>

<style scoped>

</style>