<template>
  <div class="mt-8">
    <div class="text-2xl font-medium">
      Mening profilim
    </div>
    <div class="mt-4 flex items-center justify-between">
      <div>
        Bu yerda siz shaxsiy ma'lumotlaringizni o'zgartirishingiz yoki qo'shishingiz mumkin.
      </div>
      <button class="px-2 py-3 flex rounded-lg gap-2 items-center border-[#1272CC] border text-[#1272CC]">
        <img :src="LogOut" alt="">
        Tizimdan chiqish
      </button>
    </div>
    <div class="mt-8">
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center bg-white rounded-lg" id="default-tab"
            data-tabs-toggle="#default-tab-content" role="tablist">
          <li class="me-2" role="presentation">
            <button :class="ActiveClassP" @click="profile"
                    class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                    data-tabs-target="#profile"
                    type="button" role="tab" aria-controls="profile" aria-selected="false">
              Profil
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button :class="ActiveClassSh" @click="shop"
                    class="inline-block p-4 border-b-2 rounded-t-lg "
                    id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
                    aria-selected="false">Xaridlar tarixi
            </button>
          </li>
          <li class="me-2" role="presentation">
            <button :class="ActiveClassF" @click="favorite"
                    class="inline-block p-4 border-b-2 rounded-t-lg"
                    id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
                    aria-selected="false">
              Sevimli mahsulotlar
            </button>
          </li>
        </ul>
      </div>
      <div id="default-tab-content">
        <div class="hidden p-4 rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div class="mt-2 flex items-center gap-4 ">
            <div class="bg-[#fff] p-[24px] rounded-lg w-[387px] h-[216px] ">
              <div class="font-medium text-[20px]">
                Shaxsiy ma’lumotlarim
              </div>
              <div class="mt-11">
                <div class="font-semibold">Alison Parker</div>
                <div>+998 66 230 00 15</div>
              </div>
              <div class="mt-8 font-medium text-[14px] text-[#1272CC] ">
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
              <div class="mt-8 font-medium text-[14px] text-[#1272CC] ">
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
              <div class="mt-8 font-medium text-[14px] text-[#1272CC] ">
                Manzilni kiritish
              </div>
            </div>
          </div>
        </div>
        <div class="hidden p-4 rounded-lg " id="dashboard" role="tabpanel"
             aria-labelledby="dashboard-tab">
          <div class="mt-10 flex items-center justify-center">
            <div class="flex flex-col items-center gap-4 ">
              <img :src="Basket" alt="basket">
              <div>
                Sizning xarid savatingiz hali bo’sh
              </div>
              <div>
                <button class="border border-[#1272CC] text-[#1272CC] rounded-lg flex items-center p-2">
                  <img :src="ArrowBack" alt="">
                  Xaridga qaytish
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden p-4 rounded-lg " id="settings" role="tabpanel"
             aria-labelledby="settings-tab">
          <div class="mt-10 flex items-center justify-center">
            <div class="flex flex-col items-center gap-4 ">
              <img :src="Box" alt="basket">
              <div>
                Sevimli mahsulotlar yo’q
              </div>
              <div>
                <button class="border border-[#1272CC] text-[#1272CC] rounded-lg flex items-center p-2">
                  <img :src="ArrowBack" alt="">
                  Xaridga qaytish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LogOut,Box,Basket,ArrowBack } from "@/shared/utils/images";

let ProfileActive = ref(false)
let ShopActive = ref(false)
let FavoriteActive = ref(false)

let ActiveClassP = ref("border-b-[#1272CC] text-[#1272CC]")
let ActiveClassSh = ref("")
let ActiveClassF = ref("")


let profile = () => {
  ActiveClassP.value = "border-b-[#1272CC] text-[#1272CC]"
  ActiveClassSh.value = ""
  ActiveClassF.value = ""
  ProfileActive.value = false
  ShopActive.value = true
  FavoriteActive.value = false
}
let shop = () => {
  ActiveClassP.value = ""
  ActiveClassSh.value = "border-b-[#1272CC] text-[#1272CC]"
  ActiveClassF.value = ""
  ProfileActive.value = false
  ShopActive.value = true
  FavoriteActive.value = false
}
let favorite = () => {
  ActiveClassP.value = ""
  ActiveClassSh.value = ""
  ActiveClassF.value = "border-b-[#1272CC] text-[#1272CC]"
  ProfileActive.value = false
  ShopActive.value = false
  FavoriteActive.value = true
}


</script>

<style scoped>

</style>