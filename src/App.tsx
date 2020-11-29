import React, { useState } from 'react';
import GlobalStyle from './styles';
import Main from './components/main/Main';

function App() {
	const [theme, setTheme] = useState('light');
	return (
		<>
			<Main />
			<GlobalStyle />
		</>
	);
}

export default App;
