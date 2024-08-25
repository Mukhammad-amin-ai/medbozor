<template>
  <div>
    <Header/>
    <BaseDiv>
      <CategoryPage/>
    </BaseDiv>
    <Footer/>
  </div>
</template>

<script setup>
import { Header } from "@/widgets";
import { Footer } from '@/widgets'
import { CategoryPage } from '@/widgets'
import BaseDiv from "@/shared/base-div/base-div.vue";
</script>

<style scoped>

</style>