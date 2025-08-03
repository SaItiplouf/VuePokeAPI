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
          {{ t('pokedex.title') }}
        </h1>
      </div>

      <!-- Search Input -->
      <div class="flex w-full sm:w-auto items-center gap-3 justify-between sm:justify-start">
        <LanguageSwitcher />
        <ClientOnly>
          <ThemeSwitcher />
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeSwitcher from "~/components/navbar/ThemeSwitcher.vue";

const { t } = useI18n()
import SearchBar from "~/components/navbar/SearchBar.vue";
import LanguageSwitcher from "~/components/navbar/LanguageSwitcher.vue";
</script>
