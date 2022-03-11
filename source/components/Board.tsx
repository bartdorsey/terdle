import React from 'react';
import { Box } from 'ink';
import useGame from './useGame';
import Row from './Row';
export default function Board() {
	const { board } = useGame();
	const rows = Object.values(board);
	return (
		<Box flexDirection='column'>
			{rows.map(row => <Row key={row.id} row={row}/>)}
		</Box>
	)
}
