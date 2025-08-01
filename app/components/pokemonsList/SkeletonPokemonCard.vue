<template>
  <div
      class="w-full backdrop-blur-sm bg-base-100/70 border border-light dark:border-primary border-opacity-50 rounded-lg overflow-hidden transition duration-200 ease-out cursor-wait animate-pulse"
  >
    <div class="relative bg-base-200 p-4 flex justify-center items-center h-48">
      <div
          class="absolute w-32 h-32 rounded-full bg-gradient-to-br from-light dark:from-main to-transparent blur-2xl z-0 opacity-30 dark:opacity-20"
      ></div>

      <div class="h-32 w-32 bg-gray-300 dark:bg-gray-700 rounded-full relative z-10"></div>
    </div>

    <div class="p-4 backdrop-blur-xl flex flex-col gap-2 bg-primary-light dark:bg-primary-dark">
      <div class="h-6 bg-gray-300 dark:bg-gray-700 rounded mx-auto w-3/5"></div>
    </div>
  </div>
</template>
