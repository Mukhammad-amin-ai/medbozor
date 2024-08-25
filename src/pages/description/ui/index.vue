<template>
  <div>
    <HeaderComp/>
    <BaseDiv>
      <Breadcrumbs title="Med bozor" subtitle="Kategoriya nomi"/>
      <ProductDescription/>
    </BaseDiv>
    <FooterComp/>
  </div>
</template>

<script setup>
import { HeaderComp, FooterComp, ProductDescription } from "@/widgets/index.js";
import { Breadcrumbs } from "@/shared/breadcrumbs/index.js";
import BaseDiv from "@/shared/base-div/base-div.vue";
</script>

<style scoped>

</style>