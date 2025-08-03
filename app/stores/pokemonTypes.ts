import {defineStore} from 'pinia';
import type {IPokemon} from "~/types/pokemon.model";
import type {IPokemonTypeExtended} from "~/types/pokemonType.model";

export const usePokemonTypesStore = defineStore('pokemonTypes', {
	state: () => ({
		types: [] as IPokemonTypeExtended[],
		selectedType: null as string | null,
		loading: true,
		error: null as string | null,
	}),
	actions: {
		setType(typeName: string) {
			this.selectedType = this.selectedType === typeName ? null : typeName;
		},
		async fetchAllTypes() {
			if (this.types.length > 0) return;

			this.loading = true;
			this.error = null;

			try {
				const res = await fetch('/api/types');
				if (!res.ok) {
					this.error = `HTTP error! Status: ${res.status}`;
					return;
				}
				this.types = await res.json();
			} catch (err: any) {
				this.error = err.message || 'Erreur lors du chargement des types Pokémon';
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
