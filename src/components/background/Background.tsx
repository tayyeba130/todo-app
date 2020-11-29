import React, { useState, useEffect } from 'react';
import { useTheme, Theme } from '../../contexts/ThemeContext';

export default function Background() {
	const [width, setWidth] = useState(window.innerWidth);
	const { theme } = useTheme();
	const breakpoint = 576;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	const setImgUrl = () => {
		if (theme === Theme.Light) {
			if (width < breakpoint) {
				return require(`../../images/bg-mobile-light.jpg`).default;
			} else {
				return require(`../../images/bg-desktop-light.jpg`).default;
			}
		} else if (theme === Theme.Dark) {
			if (width < breakpoint) {
				return require(`../../images/bg-mobile-dark.jpg`).default;
			} else {
				return require(`../../images/bg-desktop-dark.jpg`).default;
			}
		} else {
			return '';
		}
	};

	return (
		<img src={setImgUrl()} alt="background mountains" className="bg-img" />
	);
}
