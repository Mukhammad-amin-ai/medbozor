<template>
  <div>
    <Header/>
    <BaseDiv>
      <Breadcrumbs title="Med bozor" subtitle="Kategoriya nomi"/>
      <ProductDescription/>
    </BaseDiv>
    <Footer/>
  </div>
</template>

<script setup>
import { Header, Footer, ProductDescription } from "@/widgets/index.js";
import { Breadcrumbs } from "@/shared/breadcrumbs/index.js";
import BaseDiv from "@/shared/base-div/base-div.vue";
</script>

<style scoped>

</style>