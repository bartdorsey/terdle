import { useContext } from "react";
import { GameContext } from "./GameProvider";
import { createCell } from "../lib/board";
import { useApp } from "ink";

export default function useGame() {
	const { exit } = useApp();

	const {
		board,
		setBoard,
		columnId,
		rowId,
		setColumnId,
		setRowId,
		selectedWord,
	} = useContext(GameContext);

	function updateCurrentCell(letter: string) {
		if (!board) {
			return;
		}

		const newCell = createCell(columnId, letter);
		const row = board[rowId];
		const newCells = {
			...row?.cells,
			[columnId]: newCell,
		};
		const newBoard = {
			...board,
			[rowId]: {
				id: rowId,
				cells: newCells,
			},
		};

		// Feedback logic
		if (newBoard[rowId]) {
			const row = newBoard[rowId];
			if (row) {
				for (let i = 0; i < 5; i++) {
					if (row.cells && row.cells[i]) {
						const currentCell = row.cells[i];
						if (currentCell) {
							if (currentCell.letter === selectedWord) {
								currentCell.color = "green";
							} else if (
								currentCell.letter &&
								selectedWord.includes(currentCell.letter)
							) {
								currentCell.color = "yellow";
							} else {
								currentCell.color = "gray";
							}
						}
					}
				}
			}
		}

		setBoard(newBoard);
		nextCell();
	}

	function nextCell() {
		const row = board[rowId];
		if (!row) {
			console.error("Whoops, there was no row");
			exit();
			return;
		}
		if (rowId >= 6) {
			console.log("Game Over! The word was:", selectedWord);
			exit();
			return;
		} else if (Object.values(row.cells).join("") === selectedWord) {
			console.log("Congratulations! You guessed the word:", selectedWord);
			exit();
		} else if (columnId >= 4) {
			setColumnId(0);
			setRowId(rowId + 1);
		} else {
			setColumnId(columnId + 1);
		}
	}

	return {
		board,
		columnId,
		rowId,
		updateCurrentCell,
		nextCell,
	};
}
