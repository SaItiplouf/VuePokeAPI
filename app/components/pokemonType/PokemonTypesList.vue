<template>
  <div class="p-4">
    <div v-if="loading" class="flex flex-wrap gap-2">
      <SkeletonPokemonType />
    </div>

    <div v-if="error && !loading" class="w-full text-center">
      <Alert :message="t('pokedex.errors.fetchTypes')" variant="error" />
    </div>

    <div v-if="!loading && typesWithPokemons.length > 0" class="flex flex-wrap gap-2">
      <PokemonTypeCard
          v-for="(type, index) in typesWithPokemons"
          :key="index"
          :type="type"
      />
    </div>
  </div>
</template>


<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePokemonTypesStore } from '~/stores/pokemonTypes'
import { computed, onMounted } from 'vue'
import SkeletonPokemonType from "~/components/pokemonType/SkeletonPokemonType.vue";
import PokemonTypeCard from "~/components/pokemonType/PokemonTypeCard.vue";

const store = usePokemonTypesStore()
const { t } = useI18n()
const { types, loading, error } = storeToRefs(store)
const typesWithPokemons = computed(() =>
    types.value.filter(type => Array.isArray(type.pokemons) && type.pokemons.length > 0)
);

onMounted(async () => {
  await store.fetchAllTypes()
})
</script>
