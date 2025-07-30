import { access, writeFile } from 'fs/promises';
import { constants } from 'fs';
import { defineEventHandler } from 'h3';

async function fileExists(path: string): Promise<boolean> {
	try {
		await access(path, constants.F_OK);
		return true;
	} catch {
		return false;
	}
}

async function fetchSpecies(id: number) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
	const data = await res.json();
	const fr = data.names.find((n: any) => n.language.name === 'fr')?.name;
	return { id, en: data.name, fr };
}

export default defineEventHandler(async () => {
	const outputPath = './public/pokemonTranslations.json';

	if (await fileExists(outputPath)) {
		return { message: 'Execution Stopped; file already existing', path: outputPath };
	}

	const arr = [];
	for (let id = 1; id <= 151; id++) {
		arr.push(await fetchSpecies(id));
		await new Promise(r => setTimeout(r, 100));
	}

	await writeFile(outputPath, JSON.stringify(arr, null, 2), 'utf-8');
	return { message: 'Mapping created', path: outputPath };
});
