<template>
<!--  <div class="hidden p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">-->
    <div class="mt-2 flex items-center gap-4 ">
      <div class="bg-[#fff] p-[24px] rounded-lg w-[387px] h-[216px] ">
        <div class="font-medium text-[20px]">
          Shaxsiy ma’lumotlarim
        </div>
        <div class="mt-11">
          <div class="font-semibold">Alison Parker</div>
          <div>+998 66 230 00 15</div>
        </div>
        <div class="mt-8 font-medium text-[14px] text-[#1272CC] cursor-pointer"
             data-modal-target="Profile-modal" data-modal-toggle="Profile-modal"
        >
          Tahrirlash
        </div>
      </div>
      <div class="bg-[#fff] p-[24px] rounded-lg w-[387px] h-[216px] ">
        <div class="font-medium text-[20px]">
          Parol
        </div>
        <div class="mt-[69px]">
          <div class="font-semibold">************</div>
        </div>
        <div class="mt-8 font-medium text-[14px] text-[#1272CC] cursor-pointer"
             data-modal-target="Password-modal" data-modal-toggle="Password-modal">
          Parolni o’zgartirish
        </div>
      </div>
      <div class="bg-[#fff] p-[24px] rounded-lg w-[387px] h-[216px] ">
        <div class="font-medium text-[20px]">
          Manzil
        </div>
        <div class="mt-11">
          <div class="w-[90%]">Kelgusi buyurtmalar uchun manzilingizni kiriting</div>
        </div>
        <div class="mt-8 font-medium text-[14px] text-[#1272CC] cursor-pointer"
             data-modal-target="Address-modal" data-modal-toggle="Address-modal">
          Manzilni kiritish
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<script setup>
definePageMeta({
  name:'settings'
})

</script>

<style scoped>

</style>