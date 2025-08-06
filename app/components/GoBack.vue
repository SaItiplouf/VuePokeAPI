<template>
  <button
      @click="router.back()"
      aria-label="Back"
      class="w-10 h-10 flex items-center justify-center rounded-md bg-neutral dark:bg-light/5 border-4 border-primary dark:border-light/10 hover:bg-primary-light/10 dark:hover:bg-primary-light/20 transition"
  >
    <Icon name="heroicons-outline:arrow-left" class="w-6 h-6 dark:text-primary-light" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
const router = useRouter();
</script>
