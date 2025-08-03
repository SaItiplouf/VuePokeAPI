<template>
  <Navbar />
  <div class="flex flex-row gap-4 px-4 mt-4 items-center">
    <PokemonTypesList />
    <SearchBar />
  </div>
  <PokemonsList />
</template>

<script setup lang="ts">
import PokemonTypesList from "~/components/pokemonType/PokemonTypesList.vue";
import SearchBar from "~/components/navbar/SearchBar.vue";
</script>
