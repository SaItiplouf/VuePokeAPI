<template>
  <input
      v-model="searchTerm"
      type="text"
      aria-label="Search for Pokemon"
      placeholder="Search for Pokemon"
      class="w-full bg-primary-light dark:bg-primary-dark border dark:text-neutral border-light/30 dark:border-primary/40 rounded-lg px-4 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-main/50 transition"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Translation {
  id: number
  en: string
  fr: string
}

const props = defineProps<{
  pokemons: Pokemon[]
}>();

const emit = defineEmits<{
  (e: 'update:filtered', filtered: Pokemon[]): void
}>()

const searchTerm = ref('')
const translations = ref<Translation[]>([])

async function fetchTranslations() {
  try {
    const res = await fetch('/pokemonTranslations.json')
    if (!res.ok) {
      console.error('Erreur chargement traductions:', res.status)
      return
    }
    translations.value = await res.json()
  } catch (e) {
    console.error('Erreur chargement traductions:', e)
  }
}

onMounted(() => {
  fetchTranslations()
})

const enToFrMap = computed(() => {
  const map = new Map<string, string>()
  translations.value.forEach(t => {
    map.set(t.en.toLowerCase(), t.fr.toLowerCase())
  })
  return map
})

const filteredPokemons = computed(() => {
  const term = searchTerm.value.toLowerCase().trim()
  if (!term) return props.pokemons

  return props.pokemons.filter(p => {
    const nameEn = p.name.toLowerCase()
    const nameFr = enToFrMap.value.get(nameEn) || ''

    return nameEn.includes(term) || nameFr.includes(term)
  })
})

// Watch filteredPokemons and emit to parent on changes
import { watch } from 'vue'
import type {Pokemon} from "~/types/pokemon";
watch(filteredPokemons, (newVal) => {
  emit('update:filtered', newVal)
})
</script>


