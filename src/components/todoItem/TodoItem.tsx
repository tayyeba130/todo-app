import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useTheme } from '../../contexts/ThemeContext';
import { useTodos } from '../../contexts/TodosContext';
import TodoItemStyle from './style';

interface TodoItemProps {
	todo: Todo;
	index: number;
}

export default function TodoItem({ todo, index }: TodoItemProps) {
	const { theme } = useTheme();
	const { dispatch } = useTodos();
	return (
		<Draggable draggableId={todo.id} index={index}>
			{(provided) => (
				<TodoItemStyle
					theme={theme}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
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
									src={
										require('../../images/icon-check.svg')
											.default
									}
									alt="completed icon"
								/>
							</span>
						) : (
							<span className="circle not-completed" />
						)}
						<span>{todo.text}</span>
					</label>
					<button
						className="delete"
						onClick={() =>
							dispatch({ type: 'delete', payload: todo.id })
						}
					>
						<img
							src={require('../../images/icon-cross.svg').default}
							alt="delete todo"
						/>
					</button>
				</TodoItemStyle>
			)}
		</Draggable>
	);
}
