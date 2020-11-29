import React, { useContext } from 'react';
import MainStyle from './style';
// import ThemeContext from '../../contexts/ThemeContext';

export default function Main() {
	// const [theme] = useContext(ThemeContext);
	// console.log(theme);
	return (
		<MainStyle>
			<h1>TODO</h1>
			<img
				src={require('../../images/bg-desktop-light.jpg').default}
				alt="background mountains"
				className="bg-img"
			/>
		</MainStyle>
	);
}
