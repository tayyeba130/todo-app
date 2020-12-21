import React, { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTheme } from '../../contexts/ThemeContext';
import { Filter, useTodos } from '../../contexts/TodosContext';
import TodoItem from '../todoItem/TodoItem';
import TodoListStyle from './style';

export default function TodoList() {
	const { theme } = useTheme();
	const { todos, filter } = useTodos();
	const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
	const nodeRef = useRef(null);

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

	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;
		if (!destination) {
			return;
		}
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}
		const draftArray = [...filteredTodos];
		const todo = draftArray.splice(source.index, 1)[0];
		draftArray.splice(destination.index, 0, todo);
		setFilteredTodos(draftArray);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId={'todo-list'}>
				{(provided) => (
					<TodoListStyle
						theme={theme}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<TransitionGroup className="todo-list">
							{filteredTodos.map((todo, index) => (
								<CSSTransition
									key={todo.id}
									timeout={200}
									// nodeRef={nodeRef}
									classNames="item"
								>
									<TodoItem
										todo={todo}
										key={todo.id}
										index={index}
									/>
								</CSSTransition>
							))}
						</TransitionGroup>
						{provided.placeholder}
					</TodoListStyle>
				)}
			</Droppable>
		</DragDropContext>
	);
}
