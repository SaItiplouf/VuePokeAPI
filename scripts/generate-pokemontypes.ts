import fs from 'fs/promises';

async function fetchAllTypes() {
	try {
		const res = await fetch('https://pokeapi.co/api/v2/type');
		const data = await res.json();

		const types = await Promise.all(
			data.results.map(async (type) => {
				const typeRes = await fetch(type.url);
				const typeData = await typeRes.json();

				// Traductions des types
				const translations = typeData.names.reduce((acc, entry) => {
					acc[entry.language.name] = entry.name;
					return acc;
				}, {});

				// Liste des pokémons de ce type
				const pokemons = typeData.pokemon.map((poke) => ({
					name: poke.pokemon.name,
					url: poke.pokemon.url,
				}));

				return {
					name: type.name,
					url: type.url,
					translations,
					pokemons,
				};
			})
		);

		// Sauvegarde en JSON local
		await fs.writeFile('public/pokemonTypes.json', JSON.stringify(types, null, 2));
		console.log('✅ Types Pokémon sauvegardés dans pokemonTypes.json');
	} catch (error) {
		console.error('Erreur lors du fetch des types Pokémon:', error);
	}
}

fetchAllTypes();
