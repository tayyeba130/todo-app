import React from 'react';
import AddTodoStyle from './style';
import { useTheme } from '../../contexts/ThemeContext';

const AddTodo = () => {
	const { theme } = useTheme();
	return (
		<AddTodoStyle theme={theme}>
			<span />
			<input type="text" placeholder="Create a new todo..." />
		</AddTodoStyle>
	);
};

export default AddTodo;
