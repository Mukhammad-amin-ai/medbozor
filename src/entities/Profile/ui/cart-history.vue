<template>
<!--  <HistoryNotfound/>-->
  <div class="mt-5 flex items-center justify-center flex-wrap gap-5">
    <ProductItem v-for="(item,index) in products"
                 :key="index"
                 :title="item.title"
                 :img="item.img"
                 :price="item.price"
                 :discount="item.discount"
                 :has-discount="item.hasDiscount"
                 :cart="false"
                 :favorite="false"
    />
  </div>
</template>
<script setup>
import { HistoryNotfound} from "@/shared/not-found";
import { ProductItem } from "@/shared/product";
import { productItem } from "@/shared/utils/images";

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
