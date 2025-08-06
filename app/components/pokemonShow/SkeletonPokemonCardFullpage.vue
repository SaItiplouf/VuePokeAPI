<template>
  <div class="flex items-center justify-center">
    <div class="relative w-full max-w-5xl
                shadow-2xl rounded-xl
                grid grid-cols-1 md:grid-cols-2 overflow-hidden
                border-4 border-primary dark:border-light/10">
      <div class="p-6 flex flex-col items-center justify-center gap-6 bg-neutral dark:bg-light/5 relative">
        <div class="absolute top-2 left-2 w-7 h-7 bg-gray-300 dark:bg-gray-700 rounded-full animate-pulse"></div>
        <div class="h-48 w-48 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        <div class="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mt-4"></div>
      </div>
      <div class="p-6 flex flex-col justify-center gap-4">
        <div class="h-6 bg-gray-300 dark:bg-gray-700  rounded w-1/2 animate-pulse"></div>
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse mt-2"></div>
        <div class="grid grid-cols-2 gap-3 text-sm mt-4">
          <div class="space-y-2">
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
            <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse w-1/2"></div>
          </div>
          <div>
            <div class="h-4 bg-gray-300 dark:bg-gray-700 w-full rounded animate-pulse mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
