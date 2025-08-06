export async function fetchPokemons() {
	const config     = useRuntimeConfig()
	const res = await fetch(config.POKEMONS_URL)
	const data = await res.json()

	return await Promise.all(
		data.results.map(async (r: { name: string; url: string }) => {
			const resDetail = await fetch(r.url)
			const detail = await resDetail.json()
			const resSpecies = await fetch(`${config.POKEMON_SPECIES}/${detail.id}`)
			const species = await resSpecies.json()

			return {
				id: detail.id,
				name: detail.name,
				height: detail.height,
				weight: detail.weight,
				base_experience: detail.base_experience,
				color: species.color.name,
				sprites: detail.sprites,
				cries: detail.cries,
				translations: species.names.reduce((acc: Record<string, string>, item: {
					name: string;
					language: { name: string }
				}) => {
					acc[item.language.name] = item.name
					return acc
				}, {}),
				types: detail.types.map((t: { type: { name: string; url: string } }) => ({
					name: t.type.name,
					url: t.type.url,
				})),
			}
		})
	)
}
