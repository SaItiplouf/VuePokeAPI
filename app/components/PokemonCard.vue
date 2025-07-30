<template>
  <div
      class="w-full backdrop-blur-sm bg-base-100/70 border border-light dark:border-primary border-opacity-50 rounded-lg overflow-hidden transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-dark/30 cursor-pointer"
  >
    <div class="relative bg-base-200 p-4 flex justify-center items-center h-48">
      <div class="absolute top-2 left-2 z-20 bg-main text-white text-xs font-semibold rounded-full w-7 h-7 flex items-center justify-center shadow">
        #{{ pokemon.id }}
      </div>

      <div
          class="absolute w-32 h-32 rounded-full bg-gradient-to-br from-light dark:from-main to-transparent blur-2xl z-0 opacity-65 dark:opacity-50"
      ></div>

      <LazyNuxtImg
          :src="pokemon.image"
          :alt="pokemon.name"
          class="h-full w-auto object-contain relative z-10"
          format="webp"
          sizes="(min-width: 1024px) 200px, 100px"
      />
    </div>

    <div class="p-4 backdrop-blur-xl flex flex-col gap-2 bg-primary-light dark:bg-primary-dark">
      <h2 class="text-xl font-bold capitalize text-center text-light/90 dark:text-neutral drop-shadow">
        {{ pokemon.name }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Pokemon} from "~/types/pokemon";
defineProps<{ pokemon: Pokemon }>()
</script>
