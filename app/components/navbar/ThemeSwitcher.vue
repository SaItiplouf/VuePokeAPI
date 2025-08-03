<script setup lang="ts">
import { useColorMode } from '#imports'
import { computed } from 'vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'

const colorMode = useColorMode()

const isDark = computed({
  get: () => {
    if (import.meta.client) {
      if (colorMode.preference === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    }
    return colorMode.preference === 'dark'
  },
  set: (val) => {
    if (val === null) {
      colorMode.preference = 'system'
    } else {
      colorMode.preference = val ? 'dark' : 'light'
    }
  }
})
</script>

<template>
  <div class="inline-flex items-center space-x-2">
    <span class="text-xl">🌞</span>

    <SwitchRoot
        v-model="isDark"
        role="switch"
        :aria-checked="isDark"
        class="
        relative inline-flex w-12 h-6 items-center rounded-full
        bg-gray-300 transition-colors duration-200 peer
        data-[state=checked]:bg-success
      "
    >
      <SwitchThumb
          :class="[
    'inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200',
    isDark ? 'translate-x-7' : 'translate-x-0'
  ]"
      />

    </SwitchRoot>

    <span class="text-xl">🌙</span>
  </div>
</template>
