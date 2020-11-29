import React from 'react';
import { Theme, useTheme } from '../../contexts/ThemeContext';
import HeadingStyle from './style';

export default function Heading() {
	const { theme, setTheme } = useTheme();

	const setImgUrl = () => {
		switch (theme) {
			case Theme.Light:
				return (
					<button onClick={() => setTheme(Theme.Dark)}>
						<img
							src={require(`../../images/icon-moon.svg`).default}
							alt="moon icon"
						/>
					</button>
				);
			case Theme.Dark:
				return (
					<button onClick={() => setTheme(Theme.Light)}>
						<img
							src={require(`../../images/icon-sun.svg`).default}
							alt="sun icon"
						/>
					</button>
				);
			default:
				break;
		}
	};

	return (
		<HeadingStyle>
			<h1>TODO</h1>
			{setImgUrl()}
		</HeadingStyle>
	);
}
