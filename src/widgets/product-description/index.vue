<template>
  <div>
    <InformationDisplay/>
    <div class="mt-6">
      <ul class="flex p-2 flex-wrap text-sm font-medium text-center text-gray-500 border-b border-[#E4E9F1] dark:border-gray-700 dark:text-gray-400"
          id="default-tab"
          data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2">
          <div data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true"
               class="inline-block p-4 cursor-pointer active-tab-bar hover:bg-[#F6F9FE]">
            Ma’lumot
          </div>
        </li>
        <li class="me-2">
          <div id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
               aria-selected="false"
               class="inline-block p-4 cursor-pointer  hover:bg-[#F6F9FE]">
            Xususiyati
          </div>
        </li>
        <li class="me-2">
          <div id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
               aria-selected="false"
               class="inline-block p-4 cursor-pointer  hover:bg-[#F6F9FE]">
            Izoh
          </div>
        </li>
      </ul>
      <div id="default-tab-content">
        <div class="hidden p-4 rounded-lg" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div class="mt-2 flex items-center gap-4">
            <Information/>
          </div>
        </div>
        <div class="hidden p-4 rounded-lg " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <Characteristics/>
        </div>
        <div class="hidden p-4 rounded-lg " id="settings" role="tabpanel" aria-labelledby="settings-tab">
          <Comment/>
        </div>
      </div>
    </div>
    <Trends/>
  </div>
</template>

<script setup>
import InformationDisplay from './components/infomation-display.vue'
import Information from './components/tabbar/information.vue'
import Characteristics from './components/tabbar/charackteristics.vue'
import Comment from './components/tabbar/comment.vue'
import Trends from "@/widgets/product-description/components/trends.vue";
</script>

<style scoped>

</style>