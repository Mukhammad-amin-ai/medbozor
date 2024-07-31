<template>
  <div>
    <HeaderComp/>
    <BaseDiv>
      <CategoryPage/>
    </BaseDiv>
    <FooterComp/>
  </div>
</template>

<script setup>
import { HeaderComp } from "@/widgets";
import { FooterComp } from '@/widgets'
import { CategoryPage } from '@/widgets'
import BaseDiv from "@/shared/base-div/base-div.vue";
</script>

<style scoped>

</style>