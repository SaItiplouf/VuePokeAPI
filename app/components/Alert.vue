<template>
  <div
      role="alert"
      :class="[
      'flex items-center p-4 border-l-4 rounded shadow-sm w-full',
      variantClasses[variant]?.bg,
      variantClasses[variant]?.text,
      variantClasses[variant]?.border
    ]"
  >
    <span class="flex-grow">{{ message }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ message: string; variant?: 'info' | 'warning' | 'error' }>()
const variant = props.variant || 'info'

const variantClasses: Record<string, { bg: string; text: string; border: string }> = {
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/50',
    text: 'text-blue-700 dark:text-blue-200',
    border: 'border-blue-500 dark:border-blue-700'
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/50',
    text: 'text-yellow-700 dark:text-yellow-200',
    border: 'border-yellow-500 dark:border-yellow-700'
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-900/50',
    text: 'text-red-700 dark:text-red-200',
    border: 'border-red-500 dark:border-red-700'
  }
}
</script>
