import React, { useReducer, useState } from 'react';
import styled from 'styled-components/macro';
import { Theme, useTheme } from '../../contexts/ThemeContext';
import { Filter, TodosContext } from '../../contexts/TodosContext';
import AddTodo from '../addTodo/AddTodo';
import Filters from '../filters/Filters';
import TodoList from '../todoList/TodoList';
import todosReducer from './reducer';

export default function Todos() {
	const initialState: Todo[] = [];
	const [todos, dispatch] = useReducer(todosReducer, initialState);
	const [filter, setFilter] = useState(Filter.All);
	const { theme } = useTheme();

	return (
		<TodosContext.Provider value={{ todos, dispatch, filter, setFilter }}>
			<AddTodo />
			<TodoList />
			<Filters />
			{todos.length > 1 && (
				<StyledParagraph theme={theme}>
					Drag and drop to reorder list
				</StyledParagraph>
			)}
		</TodosContext.Provider>
	);
}

const StyledParagraph = styled.p`
	text-align: center;
	margin-top: 60px;
	font-weight: 300;
	font-size: 14px;
	color: ${(props) =>
		props.theme === Theme.Light ? 'var(--dark-500)' : 'var(--light-600)'};
`;
