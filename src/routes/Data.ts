import reader from 'g-sheets-api';

export type Rifa = { Número: string; Vendido: 'FALSE' | 'TRUE' };

function typeErr() {
	throw TypeError("data returned from g-sheet doesn't complains structure");
}

function isRifa(raw: unknown) {
	if (typeof raw !== 'object' || raw === null) return false;
	if (typeof (raw as Rifa)['Número'] !== 'string') return false;
	if (!['FALSE', 'TRUE'].includes((raw as Rifa)['Vendido'])) return false;
    return true;
}

function assertsRifaArray(raw: unknown): asserts raw is Rifa[] {
	if (!Array.isArray(raw)) {
		return typeErr();
	}
	raw.forEach((element) => {
		if (!isRifa(element)) {
			return typeErr();
		}
	});
}

export function fetchData(): Promise<Rifa[]> {
	return new Promise((res, rej) => {
		console.log('INSIDE');
		reader(
			{
				apiKey: 'AIzaSyAt8KIK8Xxih3P-IeDEE8Tvr_I2kb6DSfY',
				sheetId: '1r6Fa8cj3WV89hcd0mbdlaPEKC6rExOKgtGX-M0ljBnw'
				// sheetName: 'Sheet3'
			},
			(results: unknown) => {
				try {
					assertsRifaArray(results);
					res(results);
				} catch (e) {
					rej(e);
				}
			},
			(error: never) => {
				// console.log(error)
				rej(error);
			}
		);
	});
}

export function calculateObjective(data: Rifa[]) {
	return data.length * 100;
}

export function getVendidos(data: Rifa[]) {
	return data.filter((rifa) => rifa['Vendido'] === 'TRUE');
}

export function getLibres(data: Rifa[]) {
	return data.filter((rifa) => rifa['Vendido'] === 'FALSE');
}

export function calculateAdvances(data: Rifa[]) {
	return getVendidos(data).length * 100;
}
