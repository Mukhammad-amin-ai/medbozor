<template>
  <div class="mt-10">
    <div class="text-2xl font-medium">
      Ommabop mahsulotlar
    </div>
    <div class="mt-10 ">
      <Swiper :navigation="true" :slides-per-view='4' :modules="option" class="mySwiper h-[50vh]">
        <SwiperSlide v-for="(item,index) in products">
          <ProductItem
              :key="index"
              :title="item.title"
              :img="item.img"
              :price="item.price"
              :discount="item.discount"
              :has-discount="item.hasDiscount"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
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
let option = ref( [ Navigation ] )
</script>
