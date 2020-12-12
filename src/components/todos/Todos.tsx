import React, { useReducer, useState } from 'react';
import { Filter, TodosContext } from '../../contexts/TodosContext';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../todoList/TodoList';
import Filters from '../filters/Filters';
import todosReducer from './reducer';
import TodosStyle from './style';

export default function Todos() {
	const initialState: Todo[] = [];
	const [todos, dispatch] = useReducer(todosReducer, initialState);
	const [filter, setFilter] = useState(Filter.All);

	return (
		<TodosContext.Provider value={{ todos, dispatch, filter, setFilter }}>
			<div>
				<AddTodo />
				<TodoList />
				<Filters />
			</div>
		</TodosContext.Provider>
	);
}
