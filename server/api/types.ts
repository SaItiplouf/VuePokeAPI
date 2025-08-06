import {defineCachedEventHandler} from '#imports'

export default defineCachedEventHandler(async () => {
	try {
		return await fetchTypes()
	} catch (error) {
		console.error('fetchTypes failed – unable to retrieve types:', error)
		throw createError({
			statusCode: 503,
			statusMessage: 'Failed to fetch types from API.',
		})
	}
}, {
	maxAge: Number(useRuntimeConfig().CACHE_TTL),
	swr: true
})