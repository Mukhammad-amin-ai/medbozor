<template>
  <div class="2xl:w-[1440px] mx-auto mt-10 px-3 py-3 2xl:px-[100px] ">
    <div class="text-center">
      <div class="font-semibold text-3xl">Eng ko’p sotiladigan mahsulotlar</div>
      <div class="mt-5">Hozir Medbozorda eng ko'p sotiladigan mahsulotlarimizni ko'ring.</div>
    </div>
    <div class="mt-5 flex items-center justify-between flex-wrap gap-5">
      <ProductItem v-for="(item,index) in products"
                   :key="index"
                   :title="item.title"
                   :img="item.img"
                   :price="item.price"
                   :discount="item.discount"
                   :has-discount="item.hasDiscount"
      />
    </div>
  </div>
</template>

<script setup>
import { ProductItem } from "@/shared/product";
import { productItem } from '@/shared/utils/images'


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