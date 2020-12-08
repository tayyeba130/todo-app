import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import TodoListStyle from './style';
import { useTheme } from '../../contexts/ThemeContext';

export default function TodoList() {
	const { theme } = useTheme();
	const todos = [
		{ text: '10 minutes meditation', complete: false },
		{ text: 'Read for 1 hour', complete: true },
	];
	return (
		<TodoListStyle theme={theme}>
			{todos.map((todo) => (
				<TodoItem todo={todo} />
			))}
		</TodoListStyle>
	);
}
