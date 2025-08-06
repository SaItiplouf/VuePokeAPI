<template>
  <Navbar />
  <div class="p-4">
    <div class="w-full justify-end flex pb-2">
      <GoBack />
    </div>
    <PokemonCardFullpage v-if=pokemon :pokemon="pokemon"/>
    <SkeletonPokemonCardFullpage v-if=isLoading />
  </div>

</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, onMounted } from 'vue'
import SkeletonPokemonCardFullpage from "~/components/pokemonShow/SkeletonPokemonCardFullpage.vue";
import PokemonCardFullpage from "~/components/pokemonShow/PokemonCardFullpage.vue";

const route = useRoute()
const router = useRouter()
const store = usePokemonStore()
const name = route.params.name as string
const pokemon = computed(() => store.getPokemonByName(name))
const isLoading = ref(false)

onMounted(async () => {
  if (store.pokemons.length === 0) {
    isLoading.value = true
    await store.fetchPokemons()
    isLoading.value = false
  }
  if (!store.getPokemonByName(name)) {
    await router.push('/')
  }
})
</script>
