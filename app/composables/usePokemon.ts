import { ref } from 'vue'
import type {Pokemon} from "~/types/pokemon";

interface PokemonRef { name: string; url: string }

export const usePokemon = () => {
	const pokemons = ref<Pokemon[]>([])
	const loading = ref(true)
	const error = ref<string | null>(null)

	const fetchAll = async () => {
		loading.value = true
		try {
			// Récupère tous les pokémons (limite maximale)
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
			const data = await res.json()
			const refs: PokemonRef[] = data.results

			pokemons.value = refs.map(r => {
				const id = Number(r.url.split('/').filter(Boolean).pop())
				return {
					id,
					name: r.name,
					image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
				}
			})
		} catch (err: any) {
			error.value = err.message || 'Fetch error'
		} finally {
			loading.value = false
		}
	}

	return { pokemons, loading, error, fetchAll }
}
