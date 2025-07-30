<template>
  <div class="min-h-screen flex flex-col">
    <header class="pt-8">
      <div class="flex justify-center">
        <NuxtImg width="64" height="64" src="/pokeball.png" alt="Pokéball" />
      </div>
    </header>

    <main class="flex-1 p-4">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>
