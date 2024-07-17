<template>
  <div class="bg-[#F6F9FE] h-[100vh]">
    <HeaderComp/>
    <BaseDiv>
      <Breadcrumbs title="Med bozor" subtitle="Mening profilim"/>
      <ProfileComponent/>
    </BaseDiv>
  </div>
</template>

<script setup>
import BaseDiv from "@/shared/base-div/base-div.vue";
import { HeaderComp } from "@/widgets";
import { Breadcrumbs } from '@/shared/breadcrumbs'
import { ProfileComponent } from "@/entities/Profile/index.js";

</script>

<style scoped>

</style>