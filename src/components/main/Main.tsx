import React, { useState } from 'react';
import { Theme, ThemeContext } from '../../contexts/ThemeContext';
import MainStyle from './style';
import Background from '../background/Background';
import Heading from '../heading/Heading';
import Todos from '../todos/Todos';

export default function Main() {
	const [theme, setTheme] = useState(Theme.Light);
	return (
		<MainStyle theme={theme}>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Background />
				<div className="content">
					<Heading />
					<Todos />
				</div>
			</ThemeContext.Provider>
		</MainStyle>
	);
}
