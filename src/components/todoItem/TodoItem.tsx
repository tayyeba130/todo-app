import React from 'react';
import { v4 as uuid } from 'uuid';
import TodoItemStyle from './style';
import { useTheme } from '../../contexts/ThemeContext';

interface TodoItemProps {
	todo: {
		text: string;
		complete: boolean;
	};
}

export default function TodoItem({ todo }: TodoItemProps) {
	const { theme } = useTheme();
	return (
		<TodoItemStyle key={uuid()} theme={theme}>
			<label>
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
