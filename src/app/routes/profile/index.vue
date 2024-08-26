<template>
  <LayoutProfile/>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import LayoutProfile from '@/app/layouts/profile.vue'

const route = useRoute()
const router = useRouter()

onMounted( () => {
  if (route.path === '/profile/') {
    router.push( '/profile/settings' )
  } else if (route.path === '/profile') {
    router.push( '/profile/settings' )
  }
} )
</script>