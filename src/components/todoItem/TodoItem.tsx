import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import TodoItemStyle from './style';

interface TodoItemProps {
	todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
	const { theme } = useTheme();
	return (
		<TodoItemStyle key={todo.id} theme={theme}>
			<label className={todo.complete ? 'complete' : undefined}>
				<input type="checkbox" checked={todo.complete} />
				{todo.complete ? (
					<span className="circle completed">
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
