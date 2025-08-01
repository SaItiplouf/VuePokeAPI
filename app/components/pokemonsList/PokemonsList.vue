<template>
  <div class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <SkeletonPokemonCard
          v-if="loading"
          v-for="n in 20"
          :key="'skeleton-' + n"
      />

      <PokemonCard
          v-if="!loading && pokemons.length > 0"
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
      />
    </div>

    <div v-if="error && !loading" class="py-4 text-center">
      <Alert :message="t('pokedex.errors.fetchPokemons')" variant="error" />
    </div>

    <Alert class="text-center" v-if="!loading && pokemons.length === 0 && !error" :message="t('pokedex.noResults')" />
  </div>
</template>

<script setup lang="ts">
import PokemonCard from './PokemonCard.vue'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { usePokemonStore } from '~/stores/pokemons'
import SkeletonPokemonCard from "~/components/pokemonsList/SkeletonPokemonCard.vue";

const store = usePokemonStore()
const { loading, error } = storeToRefs(store)

// Pass a param to a Pinia Getter
const { locale, t } = useI18n()
const pokemons = computed(() => store.filteredPokemons(locale.value))

onMounted(async () => {
  await store.fetchPokemons()
})
</script>
