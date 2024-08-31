<template>
  <HistoryNotfound v-if="data"/>
  <div class="mt-5 w-full grid grid-cols-5 rounded-lg text-[#8FC3F4] bg-[#E0EFFC]" v-else>
    <div class="py-[14px] px-[88px] flex items-center justify-center text-nowrap">
      Mahsulot
    </div>
    <div class="py-[14px] px-[88px] flex items-center justify-center text-nowrap">
      Buyurtma raqami
    </div>
    <div class="py-[14px] px-[88px] flex items-center justify-center text-nowrap">
      Holati
    </div>
    <div class="py-[14px] px-[88px] flex items-center justify-center text-nowrap">
      Narxi
    </div>
    <div class="py-[14px] px-[88px] flex items-center justify-center text-nowrap">
      Buyurtma haqida
    </div>
  </div>
  <ProductCart/>
  <ProductCart/>
  <ProductCart/>
</template>
<script setup>
import { HistoryNotfound } from "@/shared/not-found";
import { productItem } from "@/shared/utils/images";
import { ProductCart } from '@/shared/product'

let data = ref( false )

const products = ref( [
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
] )
</script>
