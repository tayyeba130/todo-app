import React from 'react';
import AddTodoStyle from './style';
import { useTheme } from '../../contexts/ThemeContext';
import { useTodos } from '../../contexts/TodosContext';

const AddTodo = () => {
	const { theme } = useTheme();
	const { todos } = useTodos();
	console.log(todos);
	return (
		<AddTodoStyle theme={theme}>
			<span />
			<input type="text" placeholder="Create a new todo..." />
		</AddTodoStyle>
	);
};

export default AddTodo;
