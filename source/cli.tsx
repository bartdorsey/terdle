#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './App';
import GameProvider from './components/GameProvider';

meow(`
	Usage
	  $ terdle

	Options
		--name  Your name

	Examples
	  $ terdle --name=Jane
	  Hello, Jane
`, {
	flags: {
	}
});

render(
	<GameProvider>
		<App />
	</GameProvider>
);
