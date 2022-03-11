import React, { createContext, useState } from "react";
import { createBoard } from '../lib/board';

interface GameContextValue {
	board: Board;
	rowId: number;
	columnId: number;

	setBoard: (board: Board) => void;
	setRowId: (rowId: number) => void;
	setColumnId: (columnId: number) => void;
}

const initialBoard = createBoard();

export const GameContext = createContext<GameContextValue>({
	board: initialBoard,
	rowId: 0,
	columnId: 0,
	setRowId() { },
	setColumnId() { },
	setBoard() { }
});

type GameProviderProps = {
	children: JSX.Element;
};

export default function GameProvider({ children }: GameProviderProps) {
	const [board, setBoard] = useState(createBoard());
	const [columnId, setColumnId] = useState(0);
	const [rowId, setRowId] = useState(0);

	const contextValue: GameContextValue = {
		board,
		rowId,
		columnId,
		setColumnId,
		setRowId,
		setBoard
	};

	return (
		<GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
	);
}
