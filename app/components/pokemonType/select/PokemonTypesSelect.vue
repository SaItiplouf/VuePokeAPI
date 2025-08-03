<template>
  <div class="relative inline-block w-full text-gray-700">
    <div v-if="loading" class="w-full">
      <SkeletonPokemonSelectType />
    </div>

    <div v-if="error && !loading" class="w-full text-center">
      <Alert :message="t('pokedex.errors.fetchTypes')" variant="error" />
    </div>

    <SelectRoot
        v-if="!loading && !error"
        :model-value="store.selectedType"
        @update:modelValue="val => store.setType(val)"
        class="w-full"
        v-slot="{ open }"
    >
      <SelectTrigger
      class="w-full flex justify-between items-center px-4 py-2
      bg-primary-light dark:bg-primary-dark border dark:text-neutral border-light/30 dark:border-primary/40 rounded-lg
      text-sm cursor-pointer truncate
      focus:outline-none focus:ring-2 focus:ring-main focus:border-main
      transition-shadow duration-200 shadow-sm hover:shadow-md"
      :aria-label="t('pokedex.filters.type')"
      >
      <SelectValue
          :placeholder="store.selectedType ? store.getTypeByName(store.selectedType)?.translations?.[localeString] || 'N/R' : t('pokedex.filters.type.placeholder')"
          class="truncate max-w-[70%] italic text-gray-400"
      />
        <Icon
            name="heroicons:chevron-down"
            :class="[
              'w-5 h-5 text-gray-400 transition-transform duration-300 ease-in-out',
              { 'rotate-180': open }
            ]"
        />
      </SelectTrigger>


      <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
      >
        <SelectContent
            class="z-20 mt-1 min-w-[16rem] max-w-[20rem] max-h-60 overflow-auto
         bg-primary-light dark:bg-primary-dark border dark:text-neutral border-light/30 dark:border-primary/40 rounded-lg
         text-sm shadow-lg focus:outline-none scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-gray-100"
        >
          <SelectGroup>
            <SelectLabel class="px-3 py-1 text-xs font-semibold text-gray-500 select-none">
              {{ t('pokedex.filters.type.label') }}
            </SelectLabel>
            <div>
              <SelectItem
                  v-for="(type, index) in typesWithPokemons"
                  :key="index"
                  :value="type.name"
                  :style="{
                    backgroundColor: store.selectedType === type.name ? typeColors[type.name] : '',
                  }"
                  class="cursor-pointer px-4 py-2 text-sm rounded-md transition-colors duration-200 select-none
                     hover:bg-indigo-100 hover:shadow-md
                     focus:outline-none focus:bg-indigo-100 dark:hover:text-dark  flex items-center gap-2"
              >
                <span
                    class="inline-block w-4 h-4 rounded-full"
                    :class="{
                      'shadow-lg border border-black border-opacity-20': store.selectedType === type.name
                    }"
                    :style="{ backgroundColor: typeColors[type.name] }"
                    aria-hidden="true"
                />
                {{ type.translations?.[localeString] ?? type.name }}
              </SelectItem>
            </div>
          </SelectGroup>
        </SelectContent>
      </transition>
    </SelectRoot>
  </div>
</template>


<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePokemonTypesStore } from '~/stores/pokemonTypes'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import SkeletonPokemonCardType from "~/components/pokemonType/list/SkeletonPokemonCardType.vue";
import SkeletonPokemonSelectType from "~/components/pokemonType/select/SkeletonPokemonSelectType.vue";

const store = usePokemonTypesStore()
const { t } = useI18n()
const { types, loading, error } = storeToRefs(store)
const typesWithPokemons = computed(() =>
    types.value.filter(type => Array.isArray(type.pokemons) && type.pokemons.length > 0)
)
const localeString = getLocaleString()

const typeColors: Record<string, string> = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
}

onMounted(async () => {
  await store.fetchAllTypes()
})
</script>
