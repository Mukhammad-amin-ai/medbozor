<template>
  <div class="relative">
    <Header/>
    <Swiper/>
    <Adds/>
    <Category/>
    <AddsSecond/>
    <MostSold/>
    <Footer/>
    <ButtonToTop/>
  </div>
</template>

<script setup>
import { Header, Swiper, Category, MostSold, Footer } from "@/widgets";
import { Adds, AddsSecond } from '@/shared/adds'
import { ButtonToTop } from '@/shared/buttons'
</script>
