<template>
  <div class="mt-6 flex items-center gap-[60px]">
    <div class="flex gap-[20px]">
      <div class="flex flex-col items-center gap-3">
        <div class="w-[100px] h-[100px]"
             v-for="(src, index) in images"
             :key="index"
             @click="() => showImg(index)"
        >
          <img class="w-full" :src="src" alt="img"/>
        </div>
      </div>
      <div class="w-[420px] h-[500px]"  @click="() => showImg(0)">
        <img class="w-full" :src="images[0]" alt="img"/>
      </div>
    </div>
  </div>
  <VueEasyLightbox
      :zoomDisabled="true"
      :moveDisabled="true"
      :visible="visibleRef"
      :imgs="images"
      :index="indexRef"
      @hide="onHide"
  />
</template>

<script setup>
const visibleRef = ref( false );
const indexRef = ref( 0 );

const images = [
  "https://via.placeholder.com/100.png/",
  "https://via.placeholder.com/100.png/",
  "https://via.placeholder.com/100.png/",
  "https://via.placeholder.com/100.png/"
];

const showImg = ( index ) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
</script>

<style>
.vel-toolbar {
  display: none;
}

</style>