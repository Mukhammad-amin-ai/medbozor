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
import { HeaderComp, FooterComp, ProductDescription } from "@/widgets";
import { Breadcrumbs } from "@/shared/breadcrumbs";
import BaseDiv from "@/shared/base-div/base-div.vue";
</script>

<style scoped>

</style>