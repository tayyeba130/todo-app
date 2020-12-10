import React, { useReducer } from 'react';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../todoList/TodoList';
import todosReducer from './reducer';
// import { TodosContext } from '../../contexts/';

export default function Todos() {
	const initialState: Todo[] = [];
	const [state, dispatch] = useReducer(todosReducer, initialState);
	return (
		<div>
			<AddTodo />
			<TodoList />
		</div>
	);
}
