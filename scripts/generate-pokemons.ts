import { writeFile } from 'fs/promises'

async function fetchPokemons() {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
	const data = await res.json()

	const pokemons = await Promise.all(
		data.results.map(async (r: { name: string; url: string }) => {
			const resDetail = await fetch(r.url)
			const detail = await resDetail.json()
			const resSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${detail.id}`)
			const species = await resSpecies.json()

			return {
				id: detail.id,
				name: detail.name,
				height: detail.height,
				weight: detail.weight,
				base_experience: detail.base_experience,
				color: species.color.name,
				sprites: detail.sprites,
				translations: species.names.reduce((acc: Record<string, string>, item: { name: string, language: { name: string } }) => {
					acc[item.language.name] = item.name
					return acc
				}, {}),
				types: detail.types.map((t: { type: { name: string, url: string } }) => ({
					name: t.type.name,
					url: t.type.url,
				}))
			}
		})
	)

	await writeFile('public/pokemons.json', JSON.stringify(pokemons, null, 2))
	console.log('✅ pokemons.json generated in /public')
}

fetchPokemons().catch((e) => {
	console.error('❌ Error generating pokemons:', e)
	process.exit(1)
})
