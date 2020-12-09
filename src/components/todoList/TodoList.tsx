import React from 'react';
import { v4 as uuid } from 'uuid';
import TodoItem from '../todoItem/TodoItem';
import TodoListStyle from './style';
import { useTheme } from '../../contexts/ThemeContext';

export default function TodoList() {
	const { theme } = useTheme();
	const todos: Todo[] = [
		{ text: '10 minutes meditation', complete: false, id: uuid() },
		{ text: 'Read for 1 hour', complete: true, id: uuid() },
	];
	return (
		<TodoListStyle theme={theme}>
			{todos.map((todo) => (
				<TodoItem todo={todo} />
			))}
		</TodoListStyle>
	);
}
