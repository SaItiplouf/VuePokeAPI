import type {IPokemonType} from "~/types/pokemonType.model";

export interface IPokemon {
	name: string;
	url: string;
}

export interface IPokemonExtended extends IPokemon {
	id: number;
	base_experience: number;
	type: IPokemonType;
	height: number;
	weight: number;
	color: string;
	cries: Record<string, string>;
	sprites: Record<string, string>;
	translations: Record<string, string>;
}