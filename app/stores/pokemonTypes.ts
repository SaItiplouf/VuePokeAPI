import {defineStore} from 'pinia';
import type {IPokemon} from "~/types/pokemon.model";
import type {IPokemonTypeExtended} from "~/types/pokemonType.model";

export const usePokemonTypesStore = defineStore('pokemonTypes', {
	state: () => ({
		types: [] as IPokemonTypeExtended[],
		selectedType:  '' as string,
		loading: true,
		error: null as string | null,
	}),
	actions: {
		setType(typeName: string) {
			this.selectedType = this.selectedType === typeName ? '' : typeName;
		},
		async fetchAllTypes() {
			if (this.types.length > 0) return;

			this.loading = true;
			this.error = null;

			try {
				const res = await fetch('/pokemonTypes.json');
				this.types = await res.json();
			} catch (err: any) {
				this.error = err.message || 'Pokemon types loading error';
			} finally {
				this.loading = false;
			}
		},
		getPokemonsByType(type: string): IPokemon[] {
			const typeEntry = this.types.find(t => t.name === type)
			if (!typeEntry || !Array.isArray(typeEntry.pokemons)) return []
			return typeEntry.pokemons
		}
	},
});
