import { GameTile } from '../components/tile/tile';
import { TOTAL_TILES } from './constants';

export const generateNRandomNumbers = (n: number) => {
	const list: Array<number> = [];

	while (list.length < n) {
		const next = Math.floor(Math.random() * n) + 1;

		if (list.indexOf(next) === -1) {
			list.push(next);
		}
	}

	return list;
};

export const generateRandomBoard = (): Promise<Array<GameTile>> => {
	return new Promise((resolve) => {
		const table = generateNRandomNumbers(TOTAL_TILES);
		let valueIndex = 0;
		const tiles = [];

		for (let x = 0; x <= 3; x++) {
			for (let y = 0; y <= 3; y++) {
				tiles.push({
					x,
					y,
					value: table[valueIndex],
				});

				valueIndex++;
			}
		}

		const emptyTile = {
			x: 3,
			y: 3,
			value: 'empty',
		};

		tiles[tiles.length - 1] = emptyTile;

		resolve(tiles);
	});
};
