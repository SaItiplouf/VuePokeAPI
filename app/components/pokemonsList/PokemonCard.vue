<template>
  <NuxtLinkLocale
      :to="{ name: 'pokemon-name', params: { name: pokemon.name } }"
      class="group w-full bg-neutral dark:bg-primary-dark border border-light dark:border-primary border-opacity-50 rounded-lg overflow-hidden transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-dark/30 cursor-pointer block"
  >
    <div class="relative p-4 flex justify-center items-center h-48">
      <div
          v-bind:class="[
            pokemon.color === 'white' ? 'bg-white shadow-white/50 text-black' :
            pokemon.color === 'black' ? 'bg-black shadow-black/50 text-white' :
            pokemon.color === 'blue' ? 'bg-blue-500 shadow-blue-500/50 text-white' :
            pokemon.color === 'brown' ? 'bg-amber-900 shadow-amber-900/50 text-white' :
            pokemon.color === 'gray' ? 'bg-gray-500 shadow-gray-500/50 text-white' :
            pokemon.color === 'green' ? 'bg-green-500 shadow-green-500/50 text-white' :
            pokemon.color === 'pink' ? 'bg-pink-500 shadow-pink-500/50 text-white' :
            pokemon.color === 'purple' ? 'bg-purple-500 shadow-purple-500/50 text-white' :
            pokemon.color === 'red' ? 'bg-red-500 shadow-red-500/50 text-white' :
            pokemon.color === 'yellow' ? 'bg-yellow-500 shadow-yellow-500/50 text-white' :
            'bg-gray-500 shadow-gray-500/50 text-white',
          ]"
          class="absolute top-2 left-2 z-5 text-xs font-semibold rounded-full w-7 h-7 flex items-center justify-center shadow-sm"
      >
        #{{ pokemon.id }}
      </div>

      <div
          class="absolute w-32 h-32 rounded-full bg-gradient-to-br from-light dark:from-main to-transparent blur-2xl z-0 opacity-65 dark:opacity-50 group-hover:opacity-90 dark:group-hover:opacity-75 transition-opacity duration-300"
      ></div>

      <LazyNuxtImg
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
          :alt="pokemon.name"
          class="h-full w-auto object-contain relative z-10"
          format="webp"
          sizes="(min-width: 1024px) 200px, 100px"
      />
    </div>

    <div class="p-4 backdrop-blur-xl flex flex-col gap-2 bg-primary-light dark:bg-primary-dark">
      <h2 class="text-xl font-bold capitalize text-center text-light/90 dark:text-neutral drop-shadow">
        {{ pokemon.translations?.[localeString] ?? pokemon.name }}
      </h2>
    </div>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
defineProps<{ pokemon: IPokemonExtended }>()
import type {IPokemonExtended} from "~/types/pokemon.model";
const localeString = getLocaleString()
</script>
