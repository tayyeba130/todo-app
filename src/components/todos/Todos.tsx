import React, { useReducer, useState } from 'react';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../todoList/TodoList';
import todosReducer from './reducer';
import { TodosContext, Filter } from '../../contexts/TodosContext';

export default function Todos() {
	const initialState: Todo[] = [];
	const [todos, dispatch] = useReducer(todosReducer, initialState);
	const [filter, setFilter] = useState(Filter.All);
	return (
		<TodosContext.Provider value={{ todos, dispatch, filter, setFilter }}>
			<div>
				<AddTodo />
				<TodoList />
			</div>
		</TodosContext.Provider>
	);
}
