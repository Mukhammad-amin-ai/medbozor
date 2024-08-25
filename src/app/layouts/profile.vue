<template>
  <div class="bg-[#F6F9FE] h-[100vh] relative">
    <Header/>
    <BaseDiv>
      <Breadcrumbs title="Med bozor" subtitle="Mening profilim"/>
      <ProfileComponent/>
      <slot/>
    </BaseDiv>
  </div>
  <ProfileModule/>
</template>

<script setup>
import BaseDiv from "@/shared/base-div/base-div.vue";
import { Header } from "@/widgets";
import { Breadcrumbs } from '@/shared/breadcrumbs'
import { ProfileComponent, ProfileModule } from "@/entities/Profile";
</script>
