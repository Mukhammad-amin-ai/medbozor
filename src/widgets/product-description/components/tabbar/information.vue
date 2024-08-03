<template>
  <div class="py-7 px-4">
    <div class="flex items-start gap-[100px]">
      <div>
        <div class="leading-8">
          Condimentum aliquam neque nec ornare posuere. At viverra sit massa purus. Sit vivamus nec massa nunc varius.
          Eget
          nec tempor ornare curabitur et mus dignissim. Risus at elementum gravida dapibus aliquet leo sed. Vel
          tincidunt
          ornare amet sociis enim purus ut laoreet nisl. Id nunc quis in aliquet mi sem volutpat posuere. Quam gravida
          iaculis arcu fames ultricies vulputate donec eu at. Aliquet sem dolor sapien ac viverra pellentesque nunc
          velit.
          Neque ipsum orci amet viverra arcu a eu malesuada. Facilisis pellentesque tristique interdum eget eu elit
          cras.
          Lorem phasellus hac justo sit amet feugiat duis aliquam fringilla. Eu nibh elit montes magnis tincidunt
          aenean.
          <br><br>
          Erat ut maecenas id tortor a cursus. In quisque ac proin scelerisque. Urna id et lectus lectus erat malesuada
          malesuada pellentesque. Purus lectus scelerisque sit quis pellentesque gravida nulla eu. Orci magna fermentum
          nunc
          mauris proin in vitae. Amet malesuada nulla hendrerit velit convallis tortor.
        </div>
        <div class="w-full mt-7">
          <img :src="Thermometr" alt="Thermometr">
        </div>
        <div class="mt-7 leading-8">
          Condimentum aliquam neque nec ornare posuere. At viverra sit massa purus. Sit vivamus nec massa nunc varius.
          Eget nec tempor ornare curabitur et mus dignissim. Risus at elementum gravida dapibus aliquet leo sed. Vel
          tincidunt ornare amet sociis enim purus ut laoreet nisl. Id nunc quis in aliquet mi sem volutpat posuere.
        </div>
      </div>
      <div class="px-6 py-5 shadow-2xl flex flex-col items-center justify-center gap-3 rounded-2xl">
        <div class="w-[165px] h-[200px] flex items-center justify-center bg-[#F5F5F5]">
          <img class="w-[90%]" :src="productMask" alt="productMask">
        </div>
        <div class="text-[20px] whitespace-nowrap">
          Face Mask Thermometer
        </div>
        <div class="text-[18px] font-medium text-[#1272CC]">
          125 000 so’m
        </div>
        <div class="line-through font-light text-[14px]">
          150 000 so’m
        </div>
        <ButtonWithIcon class="w-[228px] flex items-center justify-center" text="Add to cart" text-color="#fff"
                        color="#1272CC" :icon="cart"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productMask, cart, Thermometr } from '@/shared/utils/images'
import { ButtonWithIcon } from "@/shared/buttons";

</script>

<style scoped>

</style>