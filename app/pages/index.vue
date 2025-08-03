<template>
  <Navbar />
  <div class="flex flex-row gap-4 px-4 mt-4 items-center">
    <PokemonTypesSelect />
    <SearchBar />
  </div>
  <PokemonsList />
</template>

<script setup lang="ts">
import SearchBar from "~/components/navbar/SearchBar.vue";
import PokemonTypesSelect from "~/components/pokemonType/select/PokemonTypesSelect.vue";
</script>
