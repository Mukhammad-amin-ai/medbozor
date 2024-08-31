<template>
  <div class="w-full mt-4 rounded-lg border-[#E4E9F1] border">
    <div class="py-2 px-3 text-[#ADADAD]">
      11.09.2023 13:24:59
    </div>
    <div class="w-full grid grid-cols-5 border-t border-[#E4E9F1]">
      <div class="border-r flex items-center justify-center border-[#E4E9F1]">
        <div class="w-[80px] h-[100px]">
          <img :src="productItem" alt="product item">
        </div>
      </div>
      <div class="border-r py-[66px] flex items-center justify-center border-[#E4E9F1]">
        #20230911-16
      </div>
      <div class="border-r flex items-center justify-center border-[#E4E9F1]">
        <div class="py-2 px-3 bg-[#FCF9E0] rounded-3xl text-[#CC9812]">
          In process
        </div>
      </div>
      <div class="border-r flex items-center justify-center border-[#E4E9F1] flex-col">
       <div class="text-[#1272CC] font-medium">
         873 000 so’m
       </div>
        <div class="text-[12px] line-through">
          900 000 so’m
        </div>
      </div>
      <div class="border-r flex items-center justify-center border-[#E4E9F1]">
        <Button title="To’liq ma’lumot" bgColor="#1272CC" color="white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Button } from "@/shared/buttons";
import { productItem } from "@/shared/utils/images";

</script>
