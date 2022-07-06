export const WIDTH = 5;
export const HEIGHT = 7;

export function createCell(id: number, letter: string = " "): BoardCell {
	return {
		id,
		letter,
		correctPlace: false,
		correctLetter: false,
	};
}

export function createRow(id: number): BoardRow {
	const row: BoardRow = {
		id,
		cells: {}
	}
	for (let i = 0; i < WIDTH; i++) {
		row.cells[i] = createCell(i);
	}
	return row;
}

export function createBoard(): Board {
	const board: Board = {};
	for (let i = 0; i < HEIGHT; i++) {
		board[i] = createRow(i);
	}
	return board;
}
