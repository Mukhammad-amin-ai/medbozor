<template>
  <div class="bg-white overflow-hidden md:overflow-auto">
    <Header/>
    <div class="custom-hidden h-0 lg:h-auto lg:visible md:block">
      <HeaderNavigation/>
    </div>
  </div>
</template>

<script setup>
import Header from "./header-comp.vue";
import HeaderNavigation from "./header-navigation.vue";
</script>
