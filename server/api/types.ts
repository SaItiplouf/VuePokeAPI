import { defineEventHandler } from 'h3'
import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async () => {
	const config     = useRuntimeConfig()
	const filePath  = path.resolve(config.CACHE_DIR, config.TYPES_FILE)
	// Making sure the dir exist
	await fs.mkdir(path.dirname(config.CACHE_DIR), { recursive: true })
	if (!(await isCacheValid(filePath, config.CACHE_TTL))) {
		try {
			const types = await fetchTypes()
			await fs.writeFile(filePath, JSON.stringify(types, null, 2), { encoding: 'utf-8' })
		} catch (error) {
			console.error('fetchTypes failed – falling back to existing cache**,', error);
		}
	}
	try {
		const json = await fs.readFile(filePath, 'utf-8')
		return JSON.parse(json)
	} catch(error) {
		throw createError({
			statusCode: 503,
			statusMessage: 'No cache available and failed to fetch types from API.',
		})
	}
})
