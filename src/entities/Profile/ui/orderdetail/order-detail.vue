<template>
  <div class="mt-5 h-auto">
    <div class="flex items-end gap-8">
      <div class="w-[40%] flex flex-col justify-between gap-3">
        <div class="text-2xl">
          Buyurtma haqida to’liq ma’lumot
        </div>
        <div class="flex items-center gap-4">
          <div class="font-light text-sm">
            Sana: 11.09.2023 13:24:59
          </div>
          <div class="font-light text-sm">
            Buyurtma raqami: #20230911-16
          </div>
        </div>
      </div>
      <div class="w-[60%] flex items-start justify-between ">
        <div class="flex gap-6">
          <ButtonWithIcon class="border-[#1272CC] border" text="Qayta sotib olish" color="transparent"
                          text-color="#1272CC" :icon="CartAdd"/>
          <ButtonWithIcon class="border-[#1272CC] border" text="Izoh qoldirish" color="transparent" text-color="#1272CC"
                          :icon="CommentAdd"/>
          <ButtonWithIcon class="border-[#CC1212] border" text="Buyurtmani bekor qilish" color="transparent"
                          text-color="#CC1212" :icon="CloseContract"/>
        </div>
        <ButtonWithIcon text="Orqaga" color="transparent" text-color="#1272CC" :icon="ArrowBackSmall"/>
      </div>
    </div>
    <div class="w-[60%] mt-5">
      <div class="grid grid-cols-5 gap-[200px]">
        <div class="w-[122px] flex justify-center">
          <div v-if="false"
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border-dashed before:border-gray-300">
            1
          </div>
          <div v-else
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border before:border-[#1272CC]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.6667" fill="white" stroke="#E4E9F1" stroke-width="0.666667"/>
              <path d="M30.9587 37.3333V24L28.292 26.6667" stroke="#1272CC" stroke-width="2.66667"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="30" cy="30" r="30" fill="#1272CC"/>
              <path
                  d="M25.3335 36.2266L20.7069 31.5999C20.4576 31.3506 20.1194 31.2106 19.7669 31.2106C19.4143 31.2106 19.0762 31.3506 18.8269 31.5999C18.5776 31.8492 18.4375 32.1874 18.4375 32.5399C18.4375 32.7145 18.4719 32.8874 18.5387 33.0487C18.6055 33.2099 18.7034 33.3565 18.8269 33.4799L24.4002 39.0533C24.9202 39.5733 25.7602 39.5733 26.2802 39.0533L40.3869 24.9466C40.6362 24.6973 40.7762 24.3592 40.7762 24.0066C40.7762 23.654 40.6362 23.3159 40.3869 23.0666C40.1376 22.8173 39.7994 22.6772 39.4469 22.6772C39.0943 22.6772 38.7562 22.8173 38.5069 23.0666L25.3335 36.2266Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
        <div class="w-[122px] flex justify-center">
          <div v-if="true"
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border-dashed before:border-gray-300">
            2
          </div>
          <div v-else
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border before:border-[#1272CC]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.6667" fill="white" stroke="#E4E9F1" stroke-width="0.666667"/>
              <path d="M30.9587 37.3333V24L28.292 26.6667" stroke="#1272CC" stroke-width="2.66667"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="30" cy="30" r="30" fill="#1272CC"/>
              <path
                  d="M25.3335 36.2266L20.7069 31.5999C20.4576 31.3506 20.1194 31.2106 19.7669 31.2106C19.4143 31.2106 19.0762 31.3506 18.8269 31.5999C18.5776 31.8492 18.4375 32.1874 18.4375 32.5399C18.4375 32.7145 18.4719 32.8874 18.5387 33.0487C18.6055 33.2099 18.7034 33.3565 18.8269 33.4799L24.4002 39.0533C24.9202 39.5733 25.7602 39.5733 26.2802 39.0533L40.3869 24.9466C40.6362 24.6973 40.7762 24.3592 40.7762 24.0066C40.7762 23.654 40.6362 23.3159 40.3869 23.0666C40.1376 22.8173 39.7994 22.6772 39.4469 22.6772C39.0943 22.6772 38.7562 22.8173 38.5069 23.0666L25.3335 36.2266Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
        <div class="w-[122px] flex justify-center">
          <div v-if="true"
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border-dashed before:border-gray-300">
            3
          </div>
          <div v-else
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border before:border-[#1272CC]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.6667" fill="white" stroke="#E4E9F1" stroke-width="0.666667"/>
              <path d="M30.9587 37.3333V24L28.292 26.6667" stroke="#1272CC" stroke-width="2.66667"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="30" cy="30" r="30" fill="#1272CC"/>
              <path
                  d="M25.3335 36.2266L20.7069 31.5999C20.4576 31.3506 20.1194 31.2106 19.7669 31.2106C19.4143 31.2106 19.0762 31.3506 18.8269 31.5999C18.5776 31.8492 18.4375 32.1874 18.4375 32.5399C18.4375 32.7145 18.4719 32.8874 18.5387 33.0487C18.6055 33.2099 18.7034 33.3565 18.8269 33.4799L24.4002 39.0533C24.9202 39.5733 25.7602 39.5733 26.2802 39.0533L40.3869 24.9466C40.6362 24.6973 40.7762 24.3592 40.7762 24.0066C40.7762 23.654 40.6362 23.3159 40.3869 23.0666C40.1376 22.8173 39.7994 22.6772 39.4469 22.6772C39.0943 22.6772 38.7562 22.8173 38.5069 23.0666L25.3335 36.2266Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
        <div class="w-[122px] flex justify-center">
          <div v-if="true"
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border-dashed before:border-gray-300">
            4
          </div>
          <div v-else
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC] before:content-[''] flex-col before:absolute before:left-[60px] before:top-1/2 before:w-[140px] before:border-t-2 before:border before:border-[#1272CC]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.6667" fill="white" stroke="#E4E9F1" stroke-width="0.666667"/>
              <path d="M30.9587 37.3333V24L28.292 26.6667" stroke="#1272CC" stroke-width="2.66667"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="30" cy="30" r="30" fill="#1272CC"/>
              <path
                  d="M25.3335 36.2266L20.7069 31.5999C20.4576 31.3506 20.1194 31.2106 19.7669 31.2106C19.4143 31.2106 19.0762 31.3506 18.8269 31.5999C18.5776 31.8492 18.4375 32.1874 18.4375 32.5399C18.4375 32.7145 18.4719 32.8874 18.5387 33.0487C18.6055 33.2099 18.7034 33.3565 18.8269 33.4799L24.4002 39.0533C24.9202 39.5733 25.7602 39.5733 26.2802 39.0533L40.3869 24.9466C40.6362 24.6973 40.7762 24.3592 40.7762 24.0066C40.7762 23.654 40.6362 23.3159 40.3869 23.0666C40.1376 22.8173 39.7994 22.6772 39.4469 22.6772C39.0943 22.6772 38.7562 22.8173 38.5069 23.0666L25.3335 36.2266Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
        <div class="w-[122px] flex justify-center">
          <div v-if="true"
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC]">
            5
          </div>
          <div v-else
               class="w-[60px] h-[60px] relative rounded-full flex items-center justify-center border border-[#1272CC]">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="29.6667" fill="white" stroke="#E4E9F1" stroke-width="0.666667"/>
              <path d="M30.9587 37.3333V24L28.292 26.6667" stroke="#1272CC" stroke-width="2.66667"
                    stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="30" cy="30" r="30" fill="#1272CC"/>
              <path
                  d="M25.3335 36.2266L20.7069 31.5999C20.4576 31.3506 20.1194 31.2106 19.7669 31.2106C19.4143 31.2106 19.0762 31.3506 18.8269 31.5999C18.5776 31.8492 18.4375 32.1874 18.4375 32.5399C18.4375 32.7145 18.4719 32.8874 18.5387 33.0487C18.6055 33.2099 18.7034 33.3565 18.8269 33.4799L24.4002 39.0533C24.9202 39.5733 25.7602 39.5733 26.2802 39.0533L40.3869 24.9466C40.6362 24.6973 40.7762 24.3592 40.7762 24.0066C40.7762 23.654 40.6362 23.3159 40.3869 23.0666C40.1376 22.8173 39.7994 22.6772 39.4469 22.6772C39.0943 22.6772 38.7562 22.8173 38.5069 23.0666L25.3335 36.2266Z"
                  fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-5 gap-[200px]">
        <div class="w-[122px] text-center">
          <div class="text-lg mt-1">
            Qabul qilindi
          </div>
          <div class='text-[12px] font-light mt-1'>
            Vulputate sed sagittis felis commodo laoreet.
          </div>
        </div>
        <div class="w-[122px] text-center">
          <div class="text-lg mt-1">
            Qabul qilindi
          </div>
          <div class='text-[12px] font-light mt-1'>
            Vulputate sed sagittis felis commodo laoreet.
          </div>
        </div>
        <div class="w-[122px] text-center">
          <div class="text-lg mt-1">
            Qabul qilindi
          </div>
          <div class='text-[12px] font-light mt-1'>
            Vulputate sed sagittis felis commodo laoreet.
          </div>
        </div>
        <div class="w-[122px] text-center">
          <div class="text-lg mt-1">
            Qabul qilindi
          </div>
          <div class='text-[12px] font-light mt-1'>
            Vulputate sed sagittis felis commodo laoreet.
          </div>
        </div>
        <div class="w-[122px] text-center">
          <div class="text-lg mt-1">
            Qabul qilindi
          </div>
          <div class='text-[12px] font-light mt-1'>
            Vulputate sed sagittis felis commodo laoreet.
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex items-stretch justify-between mt-10">
      <div class="w-[45%]">
        <div class="font-medium">
          Buyurtma qilingan mahsulotlar
        </div>
        <div class="grid grid-cols-3 mt-4">
          <ProductItemSmall class="max-w-[150px] max-h-[320px]" v-for="(item,index) in products"
                            :key="index"
                            :title="item.title"
                            :img="item.img"
                            :price="item.price"
                            :discount="item.discount"
                            :has-discount="item.hasDiscount"
                            :count="true"
                            :color="item.color"
          />
        </div>
      </div>
      <div class="w-[50%] h-[400px] rounded-lg py-7 px-10 bg-white">
        <div class="flex items-stretch justify-between">
          <div class="w-[50%]">
            <div class="font-medium text-[14px]">
              Buyurtma manzili
            </div>
            <div class="mt-8">
              Bobobek Turdiyev
            </div>
            <div>
              +998 66 230 00 15
            </div>
            <div>
              Amir Temur ko’chasi, 122
            </div>
            <div class="mb-6">
              Samarqand shahri, Samarqand viloyati
            </div>
          </div>
          <div class="w-[40%]">
            <div class="font-medium text-[14px]">
              Buyurtma holati
            </div>
            <div class="mt-8">
              <div class="w-[92px] py-2 px-3 bg-[#FCF9E0] rounded-3xl text-[#CC9812] text-[14px]">
                In process
              </div>
            </div>
          </div>
        </div>
        <div class="flex  items-stretch justify-between border-t border-[E4E9F1]">
          <div class="w-[50%] mt-6">
            <div class="font-medium text-[14px]">
              To’lov haqida ma’lumot
            </div>
            <div class="mt-8 flex items-center justify-between">
              <div class="text-[14px]">
                Buyurtma narxi:
              </div>
              <div class="text-[14px]">
                950 000 so’m
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-[14px]">
                Yetkazish narxi:
              </div>
              <div class="text-[14px]">
                20  000 so’m
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-[14px]">
                Chegirma:
              </div>
              <div class="text-[14px] text-[#CC1212]">
                -97 000 so’m
              </div>
            </div>
            <div class="mb-6 flex items-center justify-between">
              <div class="text-[14px] font-medium">
                Umumiy:
              </div>
              <div class="text-[14px] font-medium">
                873 000 so’m
              </div>
            </div>
          </div>
          <div class="w-[40%] mt-6">
            <div class="font-medium text-[14px]">
              To’lov uslubi
            </div>
            <div class="mt-8">
              Karta orqali
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ButtonWithIcon } from "@/shared/buttons";
import { ProductItemSmall } from '@/shared/product'
import { CartAdd, CloseContract, CommentAdd, ArrowBackSmall, productItem } from '@/shared/utils/images'

const products = ref( [
  {
    title: 'Karsinomaembrionik antigen (CEA)',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: true,
    color: 'Oq/XL'
  },
  {
    title: 'Karsinomaembrionik antigen (CEA)',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: true,
    color: 'Oq/XL'
  },
  {
    title: 'Karsinomaembrionik antigen (CEA)',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: true,
    color: 'Oq/XL'
  },
  {
    title: 'Karsinomaembrionik antigen (CEA)',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false,
    color: 'Oq/XL'
  },
  {
    title: 'Karsinomaembrionik antigen (CEA)',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false,
    color: 'Oq/XL'
  },
  {
    title: 'Karsinomaembrionik antigen (CEA)',
    img: productItem,
    price: '226 000',
    discount: '256 000',
    hasDiscount: false,
    color: 'Oq/XL'
  }
] )
</script>
