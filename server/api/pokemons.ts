import { defineEventHandler } from 'h3'
import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
	const config     = useRuntimeConfig()
	const filePath  = path.resolve(config.CACHE_DIR, config.POKEMONS_FILE)

	// Making sure the dir exist
	await fs.mkdir(config.CACHE_DIR, { recursive: true })

	if (!(await isCacheValid(filePath, config.CACHE_TTL))) {
		try {
			const pokemons = await fetchPokemons()
			await fs.writeFile(filePath, JSON.stringify(pokemons, null, 2), { encoding: 'utf-8' })
		} catch (e) {
			console.error('fetchPokemons failed – falling back to existing cache**,', e)
		}
	}

	try {
		const json = await fs.readFile(filePath, 'utf-8')
		return JSON.parse(json)
	} catch(error) {
		throw createError({
			statusCode: 503,
			statusMessage: 'No cache available and failed to fetch pokemons from API.',
		})
	}
})
