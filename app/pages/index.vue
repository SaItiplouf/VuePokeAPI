<template>
  <navbar :pokemons="pokemons" @update:filtered="handleFilteredUpdate" />

  <PokemonList
      :pokemons="visiblePokemons"
      :loading="loading"
      :error="error"
  />
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import type { Pokemon } from '~/types/pokemon'
import { usePokemon } from '~/composables/usePokemon'

import PokemonList from '~/components/PokemonList.vue'
import Navbar from "~/components/Navbar.vue";

const { pokemons, loading, error, fetchAll } = usePokemon()

// Variables de filtrage et pagination
const filteredPokemons = ref<Pokemon[]>([])
const itemsPerLoad = 20
const visibleCount = ref(itemsPerLoad)

// Initialiser la liste filtrée dès que pokemons change
watch(pokemons, (newPokemons) => {
  filteredPokemons.value = newPokemons
}, { immediate: true })

// Visible pokemons selon pagination
const visiblePokemons = computed(() =>
    filteredPokemons.value.slice(0, visibleCount.value)
)

// Handler pour la mise à jour de la liste filtrée depuis Header/SearchBar
function handleFilteredUpdate(newFiltered: Pokemon[]) {
  filteredPokemons.value = newFiltered
  visibleCount.value = itemsPerLoad
}

// Fonction pour charger plus de pokémons à la fin du scroll
function loadMore() {
  if (visibleCount.value < filteredPokemons.value.length) {
    visibleCount.value += itemsPerLoad
  }
}

// Détection du scroll pour pagination
function onScroll() {
  const scrollPosition = window.innerHeight + window.scrollY
  const threshold = document.documentElement.offsetHeight - 100
  if (scrollPosition >= threshold && !loading.value) {
    loadMore()
  }
}

onMounted(() => {
  fetchAll()
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
