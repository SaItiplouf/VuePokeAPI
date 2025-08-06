<template>
  <div v-if="pokemon.cries" class="flex w-full gap-2 justify-end">
    <div
        v-for="(url, idx) in Object.values(pokemon.cries)"
        :key="idx"
    >
      <button
          @click="playCry(url, idx)"
          :aria-label="`Play cry #${idx + 1}`"
          class="px-3 py-1 rounded bg-secondary-light/80 dark:bg-secondary-dark text-secondary-dark dark:text-white font-semibold hover:bg-secondary-light/90 dark:hover:bg-secondary-dark/90 transition flex items-center gap-1"
      >
        <Icon :name="playing === idx ? 'heroicons:play-pause' : 'heroicons:play'" class="w-5 h-5" />
        {{ t('pokedex.pokemon.cry') }} {{ idx + 1 }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ pokemon: IPokemonExtended }>()
import { ref } from 'vue'
import type { IPokemonExtended } from '~/types/pokemon.model'

const { t } = useI18n()
const playing = ref<number | null>(null)
let currentAudio: HTMLAudioElement | null = null

function playCry(url: string, index: number) {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio.currentTime = 0
  }

  currentAudio = new Audio(url)
  currentAudio.play()
      .then(() => {
        playing.value = index
        currentAudio!.onended = () => {
          playing.value = null
          currentAudio = null
        }
      })
      .catch((e) => {
        console.warn('Playing pokemon sound failed', e)
      })
}
</script>
