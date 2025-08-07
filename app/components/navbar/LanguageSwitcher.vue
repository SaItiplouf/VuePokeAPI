<template>
  <div class="flex gap-2">
    <button
        v-for="locale in locales"
        :key="locale.code"
        @click="setLocale(locale.code)"
        :aria-label="`Switch language to ${locale.name}`"
        :class="[
        'border rounded-lg shadow-sm flex items-center gap-2 px-3 py-1 transition-colors duration-200',
        locale.code === currentLocale
          ? 'bg-primary-light dark:bg-primary-dark text-white border-light/50 dark:border-primary-light/50'
          : 'bg-transparent dark:bg-transparent text-neutral border-primary/40 dark:border-light/50 hover:bg-primary-light/90 dark:hover:bg-dark/10'
      ]"
    >
      <Icon :name="`circle-flags-${locale.code}`" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locales, setLocale, locale } = useI18n()

const currentLocale = computed(() => locale.value)
</script>
