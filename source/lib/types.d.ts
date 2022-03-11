type BoardCell = {
	id: number,
	letter: string | null;
	correctPlace: boolean;
	correctLetter: boolean;
};

type BoardRow = {
	id: number,
	cells: {
		[cellId: number]: BoardCell;
	}
}

type Board = {
	[rowId: number]: BoardRow
}
