import React, { useState } from 'react';
import AddTodoStyle from './style';
import { useTheme } from '../../contexts/ThemeContext';
import { useTodos } from '../../contexts/TodosContext';

const AddTodo = () => {
	const { theme } = useTheme();
	const { dispatch } = useTodos();
	const [todo, setTodo] = useState('');
	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(event.target.value);
	};

	const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && todo.length > 0) {
			dispatch({ type: 'add', payload: todo });
			setTodo('');
		} else {
			return;
		}
	};

	return (
		<AddTodoStyle theme={theme}>
			<span />
			<input
				type="text"
				placeholder="Create a new todo..."
				onChange={changeHandler}
				onKeyDown={keyDownHandler}
				value={todo}
			/>
		</AddTodoStyle>
	);
};

export default AddTodo;
