import React from "react";
import { Box, Text } from "ink";
export default function Title() {
	const letters = ["T", "E", "R", "D", "L", "E"];
	return (
		<Box>
			{letters.map((letter, index) => (
				<Box width={5} borderColor="green" borderStyle="double" justifyContent="center" key={index}>
					<Text color="yellow">{letter}</Text>
				</Box>
			))}
		</Box>
	);
}
