import React from "react";
import { Box } from 'ink';
import Cell from "./Cell";

type RowProps = {
	row: BoardRow
}

export default function Row({ row }: RowProps) {
	const cells = Object.values(row.cells);
	return (
		<Box>
			{cells.map(cell => <Cell key={cell.id} cell={cell}/>)}
		</Box>
	)
}
