<template>
  <div class="relative inline-block w-full text-gray-700">
    <div
        class="w-full flex justify-between items-center px-4 py-2
      bg-primary-light dark:bg-primary-dark border border-light/30 dark:border-primary/40 rounded-lg
      text-sm cursor-pointer truncate
      animate-pulse"
        aria-hidden="true"
    >
      <div class="bg-gray-300 dark:bg-gray-600 rounded h-5 w-40"></div>

      <Icon
          name="heroicons:chevron-down"
          class="w-5 h-5 text-gray-400 transition-transform duration-300 ease-in-out",
      />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>