<template>
  <input
      v-model="searchTerm"
      type="text"
      @input="onInput"
      aria-label="Search for Pokemon"
      :placeholder="t('pokedex.search')"
      class="w-full bg-primary-light dark:bg-primary-dark border dark:text-neutral border-light/30 dark:border-primary/40 rounded-lg px-4 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-main/50 transition"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {useI18n} from "vue-i18n";

const { t } = useI18n()
const store = usePokemonStore()
const { searchTerm } = storeToRefs(store)

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  store.setSearch(target.value)
}
</script>


