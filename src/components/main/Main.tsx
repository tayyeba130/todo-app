import React, { useContext } from 'react';
import MainStyle from './style';

export default function Main() {
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
