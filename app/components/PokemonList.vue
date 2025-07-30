<template>
  <div>
    <div v-if="error" class="text-red-600 text-center py-4">
      {{ error }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      <PokemonCard
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          :translated-name="getTranslation(pokemon.id)"
      />

      <SkeletonCard
          v-if="loading && pokemons.length === 0"
          v-for="n in 20"
          :key="'skeleton-' + n"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/types/pokemon'
import PokemonCard from './PokemonCard.vue'
import SkeletonCard from './SkeletonCard.vue'
import type {PokemonTranslations} from "~/types/pokemonTranslations";

const props = defineProps<{
  pokemons: Pokemon[]
  loading: boolean
  error: string | null,
  translations: PokemonTranslations[]
}>()

const { locale } = useI18n()

function getTranslation(id: number): string {
  const tr = props.translations.find(t => t.id === id)
  if (!tr) return ''
  return locale.value === 'fr' ? tr.fr : tr.en
}
</script>
