<template>
  <div class="relative">
    <HeaderComp/>
    <SwiperComp/>
    <Adds/>
    <CategoryComp/>
    <AddsSecond/>
    <MostSold/>
    <FooterComp/>
    <ButtonToTop/>
  </div>
</template>

<script setup>
import { HeaderComp, SwiperComp, CategoryComp, MostSold, FooterComp } from "@/widgets";
import { Adds, AddsSecond } from '@/shared/adds'
import { ButtonToTop } from '@/shared/buttons'


</script>
