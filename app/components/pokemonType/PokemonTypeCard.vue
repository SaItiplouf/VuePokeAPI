<template>
  <button
      :key="type.name"
      @click="store.setType(type.name)"
      :style="{ backgroundColor: typeColors[type.name] || '#777' }"
      :class="[
            type.name === store.selectedType ? 'ring-4 ring-main' : ''
          ]"
      class="px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition duration-200 capitalize border dark:text-neutral border-light/30 dark:border-primary/40"
  >
    {{ type.translations?.[localeString] ?? type.name }}
  </button>
</template>


<script setup lang="ts">
defineProps<{ type: IPokemonTypeExtended }>()
import type {IPokemonTypeExtended} from "~/types/pokemonType.model";
import {usePokemonTypesStore} from "~/stores/pokemonTypes";
const store = usePokemonTypesStore()
const localeString = getLocaleString()

const typeColors: Record<string, string> = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}
</script>


