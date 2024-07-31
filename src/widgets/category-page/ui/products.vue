<template>
  <div class="w-[920px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <ProductItem v-for="(item,index) in products"
                 :key="index"
                 :title="item.title"
                 :img="item.img"
                 :price="item.price"
                 :discount="item.discount"
                 :has-discount="item.hasDiscount"
    />
  </div>
</template>

<script setup>
import { ProductItem } from '@/shared/product'
import { productItem } from "@/shared/utils/images/index.js";

const products = ref([
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: true
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: true
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: true
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  },
  {
    title: 'Tibbiy forma',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false
  }
])

</script>

<style scoped>

</style>