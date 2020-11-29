import React, { useState } from 'react';
import { Theme, ThemeContext } from '../../contexts/ThemeContext';
import MainStyle from './style';
import Background from '../background/Background';

export default function Main() {
	const [theme, setTheme] = useState(Theme.Light);
	return (
		<MainStyle>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<h1>TODO</h1>
				<Background />
			</ThemeContext.Provider>
		</MainStyle>
	);
}
