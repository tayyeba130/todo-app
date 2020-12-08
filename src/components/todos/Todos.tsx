import React from 'react';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../todoList/TodoList';

export default function Todos() {
	return (
		<div>
			<AddTodo />
			<TodoList />
		</div>
	);
}
