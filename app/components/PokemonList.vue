<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <PokemonCard
        v-for="p in pokemons"
        :key="p.name"
        :pokemon="p"
    />
  </div>
</template>

<script setup lang="ts">
import {usePokemon} from "~/composables/usePokemon";
import {onMounted} from "vue";
import PokemonCard from "./PokemonCard.vue";

const { pokemons, nextUrl, loading, error, fetchPage } = usePokemon()

onMounted(() => {
  fetchPage(20, 0)
})
</script>
