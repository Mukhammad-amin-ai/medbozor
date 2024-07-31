<template>
  <div class="w-[280px]">
    <div class="font-medium">
      Kategoriya
    </div>
    <div id="accordion-collapse" data-accordion="collapse" class="mt-3">
      <h2 id="accordion-collapse-heading-1">
        <button type="button"
                class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-1" aria-expanded="false"
                aria-controls="accordion-collapse-body-1">
          <span>Category 1</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
        <div class="p-2">
          <h2 id="accordion-collapse-heading-11">
            <button type="button"
                    class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 "
                    data-accordion-target="#accordion-collapse-body-11" aria-expanded="false"
                    aria-controls="accordion-collapse-body-11">
              <span>Category 1-1</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-11" class="hidden" aria-labelledby="accordion-collapse-heading-11">
            <div class="p-2">
              <h1>Hello</h1>
            </div>
          </div>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button type="button"
                class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-2" aria-expanded="false"
                aria-controls="accordion-collapse-body-2">
          <span>Category 2</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
        <div class="p-2">
          <h1>Hello</h1>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-3">
        <button type="button"
                class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-3" aria-expanded="false"
                aria-controls="accordion-collapse-body-3">
          <span>Category 3</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
        <div class="p-2">
          <h1>Hello</h1>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-4">
        <button type="button"
                class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-4" aria-expanded="false"
                aria-controls="accordion-collapse-body-4">
          <span>Category 4</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
        <div class="p-2">
          <h1>Hello</h1>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-5">
        <button type="button"
                class="flex items-center justify-between w-full p-2 font-medium rtl:text-right text-gray-500 "
                data-accordion-target="#accordion-collapse-body-5" aria-expanded="false"
                aria-controls="accordion-collapse-body-5">
          <span>Category 5</span>
          <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
               xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
        <div class="p-2">
          <h1>Hello</h1>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <div class="font-medium">
        Rang
      </div>
      <div class="flex items-center gap-2 mt-6">
        <Color bg-color="#fff"/>
        <Color bg-color="#000"/>
      </div>
    </div>
    <div class="mt-10">
      <div class="font-medium">
        O'lcham
      </div>
      <div class="flex items-center gap-2 mt-6">
        <Size size="xl"/>
        <Size size="lg"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Color from '@/shared/color/index.vue'
import Size from '@/shared/size/index.vue'
</script>

<style scoped>

</style>