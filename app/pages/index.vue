<template>
  <PokemonList :pokemons="pokemons" :loading="loading" :error="error" />
</template>

<script setup lang="ts">
import {onMounted} from "vue";
const { pokemons, loading, error, fetchAll } = usePokemon()

onMounted(() => {
  fetchAll()
})
import PokemonList from "../components/PokemonList.vue";
import {usePokemon} from "~/composables/usePokemon";
</script>