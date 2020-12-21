import React, { useReducer, useState } from 'react';
import { Filter, TodosContext } from '../../contexts/TodosContext';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../todoList/TodoList';
import Filters from '../filters/Filters';
import todosReducer from './reducer';
import styled from 'styled-components/macro';
import { useTheme } from '../../contexts/ThemeContext';
import { Theme } from '../../contexts/ThemeContext';

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
			<StyledParagraph theme={theme}>
				Drag and drop to reorder list
			</StyledParagraph>
		</TodosContext.Provider>
	);
}

const StyledParagraph = styled.p`
	text-align: center;
	margin-top: 50px;
	font-weight: 300;
	font-size: 14px;
	color: ${(props) =>
		props.theme === Theme.Light ? 'var(--dark-500)' : 'var(--light-600)'};
`;
