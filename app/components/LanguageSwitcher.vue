<template>
  <div class="flex gap-2">
    <button
        v-for="locale in locales"
        :key="locale.code"
        @click="setLocale(locale.code)"
        class="bg-primary-light dark:bg-primary-dark border dark:text-neutral border-light/30 dark:border-primary/40 rounded-lg shadow-sm flex items-center gap-2 px-3 py-1 hover:bg-primary-light/90 dark:hover:bg-primary-dark/90"
        :aria-label="`Switch language to ${locale.name}`"
    >
      <Icon :name="`circle-flags-${locale.code}`" class="w-6 h-6"/>
    </button>
  </div>
</template>
<script setup>
const { locales, setLocale } = useI18n()
</script>
