import React, { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Filter, useTodos } from '../../contexts/TodosContext';
import TodoItem from '../todoItem/TodoItem';
import TodoListStyle from './style';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function TodoList() {
	const { theme } = useTheme();
	const { todos, filter } = useTodos();
	const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

	useEffect(() => {
		if (filter === Filter.All) {
			setFilteredTodos(todos);
		} else if (filter === Filter.Completed) {
			const draft = todos.filter((todo) => todo.complete === true);
			setFilteredTodos(draft);
		} else if (filter === Filter.Active) {
			const draft = todos.filter((todo) => todo.complete === false);
			setFilteredTodos(draft);
		} else {
			setFilteredTodos(todos);
		}
	}, [filter, todos]);

	return (
		<TodoListStyle theme={theme}>
			<TransitionGroup>
				{filteredTodos.map((todo) => (
					<CSSTransition
						key={todo.id}
						timeout={500}
						classNames="item"
					>
						<TodoItem todo={todo} key={todo.id} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</TodoListStyle>
	);
}
