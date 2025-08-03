<template>
  <div v-for="n in 5" :key="n"
       :class="cssClass"
       class="h-10 w-24 rounded-lg bg-base-100/70 backdrop-blur-md border border-light dark:border-primary border-opacity-50 animate-pulse">
  </div>
</template>

<script setup lang="ts">
defineProps({
  cssClass: {
    type: String,
    default: ''
  }
})
</script>