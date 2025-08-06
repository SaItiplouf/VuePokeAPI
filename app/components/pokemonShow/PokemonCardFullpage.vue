<template>
  <div class="flex items-center justify-center">
    <div class="relative w-full max-w-5xl
                shadow-2xl rounded-xl
                grid grid-cols-1 md:grid-cols-2 overflow-hidden
                border-4 border-primary dark:border-light/10">

      <div class="p-6 flex flex-col items-center justify-center gap-6 bg-neutral dark:bg-light/5 relative">
        <div
            :class="pokemonClass"
            class="absolute top-2 left-2 z-20 text-xs font-semibold rounded-full w-7 h-7 flex items-center justify-center shadow-sm"
        >
          #{{ pokemon.id }}
        </div>

        <div class="absolute w-48 h-48 rounded-full bg-gradient-to-br
                      from-light dark:from-main to-transparent blur-2xl z-0
                      opacity-60 dark:opacity-50 transition-opacity duration-300
                      group-hover:opacity-90 dark:group-hover:opacity-75"></div>

        <LazyNuxtImg
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
            :alt="pokemon.name"
            class="h-48 w-auto relative z-10"
        />

        <PokemonCriesList v-if="pokemon.cries && Object.keys(pokemon.cries).length > 0" :pokemon="pokemon" />
      </div>

      <!-- volet droite -->
      <!-- Volet droite amélioré -->
      <div class="p-6 flex flex-col justify-center gap-6 bg-white/90 dark:bg-dark/5 rounded-r-xl">
        <div v-if="!pokemon">
          <p class="text-red-500">{{ t('pokedex.notFound') }}</p>
        </div>

        <div v-else>
          <!-- Nom du Pokémon -->
          <h1 class="text-4xl font-bold capitalize text-dark dark:text-primary-light mb-2">
            {{ pokemon.translations?.[localeString] ?? pokemon.name }}
          </h1>

          <hr class="border-light dark:border-white/10 my-2" />

          <!-- Infos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-dark/80 dark:text-light/80">
            <div class="flex items-center gap-2">
              <span class="font-semibold">{{ t('pokedex.pokemon.height') }}:</span>
              <span>{{ pokemon.height }} dm</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-semibold">{{ t('pokedex.pokemon.weight') }}:</span>
              <span>{{ pokemon.weight }} hg</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-semibold">{{ t('pokedex.pokemon.baseExp') }}:</span>
              <span>{{ pokemon.base_experience }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { pokemon } = defineProps<{
  pokemon: IPokemonExtended
}>()

import PokemonCriesList from "~/components/pokemonShow/PokemonCriesList.vue";
import type {IPokemonExtended} from "~/types/pokemon.model";

const localeString = getLocaleString();
const { t } = useI18n();
const pokemonClass = computed(() =>
    getPokemonColorClass(pokemon.color)
)
</script>
