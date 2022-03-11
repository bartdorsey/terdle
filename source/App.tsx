import React from "react";
import { Box, useInput, useApp } from "ink";
import Board from "./components/Board";
import Title from "./components/Title";
import useGame from "./components/useGame";

const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const App = () => {
	const { exit } = useApp();
	const { updateCurrentCell } = useGame();
	useInput((input) => {
		if (input === "q") {
			exit();
		}
		if (alphabet.includes(input)) {
			updateCurrentCell(input.toUpperCase());
		}
	});

	return (
		<Box flexDirection="column" alignItems="center" width={80}>
			<Title />
			<Board />
		</Box>
	);
};

module.exports = App;
export default App;
