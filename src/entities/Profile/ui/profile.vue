<template>
  <div class="mt-8">
    <div class="text-2xl font-medium">
      Mening profilim
    </div>
    <div class="mt-4 flex items-center justify-between">
      <div>
        Bu yerda siz shaxsiy ma'lumotlaringizni o'zgartirishingiz yoki qo'shishingiz mumkin.
      </div>
      <button class="px-2 py-3 flex rounded-lg gap-2 items-center border-[#1272CC] border text-[#1272CC]"
              data-modal-target="logout-modal" data-modal-toggle="logout-modal">
        <img :src="LogOut" alt="">
        Tizimdan chiqish
      </button>
    </div>
    <div class="mt-8">
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center bg-white rounded-lg" id="default-tab"
            data-tabs-toggle="#default-tab-content" role="tablist">
          <li class="me-2" role="presentation">
            <nuxt-link to="/profile/settings">
              <button :class="ActiveClassP" @click="profile"
                      class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab"
                      data-tabs-target="#profile"
                      type="button" role="tab" aria-controls="profile" aria-selected="true">
                Profil
              </button>
            </nuxt-link>
          </li>
          <li class="me-2" role="presentation">
            <nuxt-link to="/profile/history">
              <button :class="ActiveClassSh" @click="shop"
                      class="inline-block p-4 border-b-2 rounded-t-lg "
                      id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                      aria-controls="dashboard"
                      aria-selected="false">Xaridlar tarixi
              </button>
            </nuxt-link>
          </li>
          <li class="me-2" role="presentation">
            <nuxt-link to="/profile/favorite">
              <button :class="ActiveClassF" @click="favorite"
                      class="inline-block p-4 border-b-2 rounded-t-lg"
                      id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
                      aria-selected="false">
                Sevimli mahsulotlar
              </button>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileModel from "./profile-model.vue";
import { LogOut } from "@/shared/utils/images";

let ProfileActive = ref( false )
let ShopActive = ref( false )
let FavoriteActive = ref( false )

let ActiveClassP = ref( "border-b-[#1272CC] text-[#1272CC]" )
let ActiveClassSh = ref( "" )
let ActiveClassF = ref( "" )

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