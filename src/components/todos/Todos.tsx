import React, { useReducer } from 'react';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../todoList/TodoList';
import todosReducer from './reducer';
import { TodosContext } from '../../contexts/TodosContext';

export default function Todos() {
	const initialState: Todo[] = [];
	const [todos, dispatch] = useReducer(todosReducer, initialState);
	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			<div>
				<AddTodo />
				<TodoList />
			</div>
		</TodosContext.Provider>
	);
}
