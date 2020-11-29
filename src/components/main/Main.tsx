import React, { useState } from 'react';
import { Theme, ThemeContext } from '../../contexts/ThemeContext';
import MainStyle from './style';
import Background from '../background/Background';
import Heading from '../heading/Heading';

export default function Main() {
	const [theme, setTheme] = useState(Theme.Light);
	return (
		<MainStyle>
			<ThemeContext.Provider value={{ theme, setTheme }}>
				<Background />
				<div className="content">
					<Heading />
				</div>
			</ThemeContext.Provider>
		</MainStyle>
	);
}
