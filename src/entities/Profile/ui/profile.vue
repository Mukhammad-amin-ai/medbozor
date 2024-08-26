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
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center bg-white rounded-lg">
          <li class="me-2" role="presentation">
            <nuxt-link to="/profile/settings">
              <button class="inline-block p-4 border-b-2 rounded-t-lg" :class="settings">
                Profil
              </button>
            </nuxt-link>
          </li>
          <li class="me-2" role="presentation">
            <nuxt-link to="/profile/history">
              <button class="inline-block p-4 border-b-2 rounded-t-lg " :class="history">
                Xaridlar tarixi
              </button>
            </nuxt-link>
          </li>
          <li class="me-2" role="presentation">
            <nuxt-link to="/profile/favorite">
              <button class="inline-block p-4 border-b-2 rounded-t-lg" :class="favorite">
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
import { onMounted } from "vue";
import { LogOut } from "@/shared/utils/images";
import { useRoute } from "vue-router";


let settings = ref( '' )
let history = ref( '' )
let favorite = ref( '' )

const route = useRoute()

onMounted( () => {
  if (route.path === '/profile/settings') {
    settings.value = 'border-b-[#1272CC] text-[#1272CC]'
  } else if (route.path === '/profile/history') {
    history.value = 'border-b-[#1272CC] text-[#1272CC]'
  } else if (route.path === '/profile/favorite') {
    favorite.value = 'border-b-[#1272CC] text-[#1272CC]'
  }
} )
</script>