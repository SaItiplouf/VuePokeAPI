export async function fetchTypes() {
	const config = useRuntimeConfig();
	const res = await fetch(config.TYPES_URL)
	const data = await res.json()

	return await Promise.all(
		data.results.map(async (type: { name: string; url: string }) => {
			const typeRes = await fetch(type.url)
			const typeData = await typeRes.json()

			const translations = typeData.names.reduce((acc: Record<string, string>, entry: {
				language: { name: string };
				name: string
			}) => {
				acc[entry.language.name] = entry.name
				return acc
			}, {})

			const pokemonsOfType = typeData.pokemon.map((poke: { pokemon: { name: string; url: string } }) => ({
				name: poke.pokemon.name,
				url: poke.pokemon.url,
			}))

			return {
				name: type.name,
				url: type.url,
				translations,
				pokemons: pokemonsOfType,
			}
		})
	)
}
