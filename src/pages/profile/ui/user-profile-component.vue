<template>
  <div class="bg-[#F6F9FE] h-[100vh]">
    <HeaderComp/>
    <BaseDiv>
      <Breadcrumbs title="Med bozor" subtitle="Mening profilim"/>
    </BaseDiv>
  </div>
</template>

<script setup>
import { HeaderComp } from "@/widgets";
import { Breadcrumbs } from '@/shared/breadcrumbs'
import BaseDiv from "@/shared/base-div/base-div.vue";

</script>

<style scoped>

</style>