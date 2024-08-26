<template>
  <div class="bg-white">
    <Header/>
    <div class="invisible h-0 lg:h-auto lg:visible md:block">
      <HeaderNavigation/>
    </div>
  </div>
</template>

<script setup>
import Header from "./header-comp.vue";
import HeaderNavigation from "./header-navigation.vue";
</script>
