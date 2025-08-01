import type {IPokemon} from "~/types/pokemon.model";

export interface IPokemonType {
	name: string
	url: string
}

export interface  IPokemonTypeExtended extends IPokemonType {
	translations: Record<string, string>;
	pokemons: IPokemon[]
}