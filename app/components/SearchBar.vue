<template>
  <input
      v-model="searchTerm"
      type="text"
      aria-label="Search for Pokemon"
      :placeholder="t('search')"
      class="w-full bg-primary-light dark:bg-primary-dark border dark:text-neutral border-light/30 dark:border-primary/40 rounded-lg px-4 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-main/50 transition"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { watch } from 'vue'
import type {Pokemon} from "~/types/pokemon";
import type {PokemonTranslations} from "~/types/pokemonTranslations";
const { t } = useI18n()

const props = defineProps<{
  pokemons: Pokemon[]
  translations: PokemonTranslations[]
}>();

const emit = defineEmits<{
  (e: 'update:filtered', filtered: Pokemon[]): void
}>()

const searchTerm = ref('')


const enToFrMap = computed(() => {
  const map = new Map<string, string>()
  props.translations.forEach(tr => {
    map.set(tr.en.toLowerCase(), tr.fr.toLowerCase())
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

watch(filteredPokemons, (newVal) => {
  emit('update:filtered', newVal)
})
</script>


