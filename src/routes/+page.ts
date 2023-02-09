import { calculateAdvances, calculateObjective, fetchData, getLibres, getVendidos } from './Data';
import type { Rifa } from './Data';
export type data = {
	vendidas: Rifa[];
	disponibles: Rifa[];
	objetivo: number;
	avance: number;
};

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<data> {
	const rifas = await fetchData();
	const vendidas = getVendidos(rifas);
	const disponibles = getLibres(rifas);
	const objetivo = calculateObjective(rifas);
	const avance = calculateAdvances(rifas);

	return {
		vendidas,
		disponibles,
		objetivo,
		avance
	};
}
