import {defineCachedEventHandler} from '#imports'

export default defineCachedEventHandler(async () => {
	try {
		return await fetchPokemons()
	} catch (error) {
		console.error('fetchPokemons failed – unable to retrieve pokemons:', error)
		throw createError({
			statusCode: 503,
			statusMessage: 'Failed to fetch pokemons from API.',
		})
	}
}, {
	maxAge: Number(useRuntimeConfig().CACHE_TTL),
	swr: true
})