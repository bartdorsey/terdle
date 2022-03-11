import { useContext } from "react";
import { GameContext } from "./GameProvider";
import { createCell } from "../lib/board";
import { useApp } from 'ink';

export default function useGame() {
	const { exit } = useApp();
	const { board, setBoard, columnId, rowId, setColumnId, setRowId } = useContext(GameContext);

	function updateCurrentCell(letter: string) {
		if (!board) {
			return;
		}

		const newCell = createCell(columnId, letter);
		const row = board[rowId];
		const newCells = {
			...row?.cells,
			[columnId]: newCell
		}
		const newBoard = {
			...board,
			[rowId]: {
				id: rowId,
				cells: newCells
			}
		}
		setBoard(newBoard);
		nextCell();
	}

	function nextCell() {
		if (rowId >= 6) {
			console.log("DONE!");
			exit();
		}
		if (columnId >= 4) {
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
		nextCell
	}
}
