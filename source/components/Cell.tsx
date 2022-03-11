import React from "react";
import { Box, Text } from "ink";

type CellProps = {
	cell: BoardCell
};

export default function Cell({ cell }: CellProps) {
	return (
		<Box borderStyle="single" width={5} justifyContent="center">
			<Text>{cell.letter}</Text>
		</Box>
	);
}
