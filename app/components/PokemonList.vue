<template>
  <header class="sticky top-0 z-20 bg-base-100/80 backdrop-blur-md shadow-sm px-4 sm:px-6 lg:px-8 w-full">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-3 py-3">

      <!-- Logo + Title -->
      <div class="flex items-center gap-3">
        <LazyNuxtImg
            width="48"
            height="48"
            src="/pokeball.png"
            alt="Logo Pokédex"
            class="w-10 h-10"
        />
        <h1 class="text-xl sm:text-2xl font-bold text-light dark:text-neutral">
          Pokédex
        </h1>
      </div>

      <!-- Search Input -->
      <div class="w-full sm:w-64">
        <SearchBar :pokemons="pokemons" @update:filtered="handleFilteredUpdate" />
      </div>

    </div>
  </header>


  <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
    <PokemonCard
        v-for="p in visiblePokemons"
        :key="p.name"
        :pokemon="p"
    />
    <SkeletonCard v-if="loading && pokemons.length === 0" v-for="n in 20" :key="'skeleton-' + n" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import SearchBar from '~/components/SearchBar.vue'
import PokemonCard from './PokemonCard.vue'
import SkeletonCard from "~/components/SkeletonCard.vue"
import type {Pokemon} from "~/types/pokemon";

const { pokemons, loading, error } = defineProps<{
  pokemons: Pokemon[]
  loading: boolean
  error: string | null
}>()

const filteredPokemons = ref<Pokemon[]>([])
const itemsPerLoad = 20
const visibleCount = ref(itemsPerLoad)

watch(() => pokemons, (newPokemons) => {
  filteredPokemons.value = newPokemons
}, { immediate: true })

function handleFilteredUpdate(newFiltered: Pokemon[]) {
  filteredPokemons.value = newFiltered
  visibleCount.value = itemsPerLoad
}

const visiblePokemons = computed(() =>
    filteredPokemons.value.slice(0, visibleCount.value)
)

function loadMore() {
  if (visibleCount.value < filteredPokemons.value.length) {
    visibleCount.value += itemsPerLoad
  }
}

function onScroll() {
  const scrollPosition = window.innerHeight + window.scrollY
  const threshold = document.documentElement.offsetHeight - 100
  if (scrollPosition >= threshold && !loading) {
    loadMore()
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

</script>
