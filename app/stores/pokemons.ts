import {defineStore} from 'pinia'
import {usePokemonTypesStore} from '~/stores/pokemonTypes'
import type {IPokemonExtended} from '~/types/pokemon.model'

export const usePokemonStore = defineStore('pokemon', {
	state: () => ({
		pokemons:      [] as IPokemonExtended[],
		searchTerm:    '' as string,
		loading:       true,
		error:         null as string|null,
	}),
	getters: {
		filteredPokemons: (state) => (locale: string) => {
			const typesStore = usePokemonTypesStore()
			let list = state.pokemons

			if (typesStore.selectedType) {
				const pokemonsToInclude = typesStore.getPokemonsByType(typesStore.selectedType)
				const names = pokemonsToInclude.map(p => p.name)
				list = list.filter(item => names.includes(item.name))
			}

			if (state.searchTerm) {
				const term = state.searchTerm.toLowerCase().trim()
				list = list.filter(p => {
					const nameDefault = p.name.toLowerCase()
					const nameTranslated = p.translations?.[locale]?.toLowerCase() || ''
					return nameDefault.includes(term) || nameTranslated.includes(term)
				})
			}
			return list
		}
	},
	actions: {
		setSearch(term: string) {
			this.searchTerm = term
		},
		async fetchPokemons() {
			if (this.pokemons.length > 0) return;

			this.loading = true;
			this.error = null;

			try {
				const res = await fetch('/pokemons.json');
				this.pokemons = await res.json();
			} catch (err: any) {
				this.error = err.message || 'Pokemons loading error';
			} finally {
				this.loading = false;
			}
		}
	}
})