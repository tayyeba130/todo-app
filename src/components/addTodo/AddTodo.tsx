import React from 'react';
import AddTodoStyle from './style';

const AddTodo = () => {
	return (
		<AddTodoStyle>
			<span />
			<input type="text" placeholder="Create a new todo..." />
		</AddTodoStyle>
	);
};

export default AddTodo;
