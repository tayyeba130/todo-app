import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTodos } from '../../contexts/TodosContext';
import TodoItemStyle from './style';

interface TodoItemProps {
	todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
	const { theme } = useTheme();
	const { dispatch } = useTodos();
	return (
		<TodoItemStyle theme={theme} className="item">
			<label className={todo.complete ? 'complete' : undefined}>
				<input
					type="checkbox"
					checked={todo.complete}
					onChange={() =>
						dispatch({ type: 'toggle', payload: todo.id })
					}
				/>
				{todo.complete ? (
					<span className="circle">
						<img
							src={require('../../images/icon-check.svg').default}
							alt="completed icon"
						/>
					</span>
				) : (
					<span className="circle not-completed" />
				)}
				<span>{todo.text}</span>
			</label>
		</TodoItemStyle>
	);
}
