import { ref } from 'vue'

interface PokemonRef { name: string; url: string }
interface Pokemon { name: string; image: string }

export const usePokemon = () => {
	const pokemons = ref<Pokemon[]>([])
	const nextUrl = ref<string | null>(null)
	const loading = ref(false)
	const error = ref<string | null>(null)

	const fetchPage = async (limit = 20, offset = 0) => {
		loading.value = true
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
			const data = await res.json()
			nextUrl.value = data.next
			const refs: PokemonRef[] = data.results

			const page = refs.map(r => {
				const id = r.url.split('/').filter(Boolean).pop()
				return {
					name: r.name,
					image: id
						? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
						: ''
				}
			})
			pokemons.value.push(...page)
		} catch (err: any) {
			error.value = err.message || 'Fetch error'
		} finally {
			loading.value = false
		}
	}
	return { pokemons, nextUrl, loading, error, fetchPage }
}
