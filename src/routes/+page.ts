import { calculateAdvances, calculateObjective, fetchData, getLibres, getVendidos } from './Data';
/** @type {import('./$types').PageLoad} */

export type data = {
	vendidas: import('/home/nahuel/Demos/RifaOnline/src/routes/Data').Rifa[];
	disponibles: import('/home/nahuel/Demos/RifaOnline/src/routes/Data').Rifa[];
	objetivo: number;
	avance: number;
};
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
