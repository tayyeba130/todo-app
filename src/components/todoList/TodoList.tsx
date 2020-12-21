import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Filter, useTodos } from '../../contexts/TodosContext';
import TodoItem from '../todoItem/TodoItem';
import TodoListStyle from './style';

export default function TodoList() {
	const { todos, filter, dispatch } = useTodos();
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

	const onDragEnd = (result: DropResult) => {
		console.log(result);
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
		dispatch({
			type: 'drag',
			payload: { source: source.index, destination: destination.index },
		});
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId={'todo-list'}>
				{(provided) => (
					<TodoListStyle
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<TransitionGroup className="todo-list">
							{filteredTodos.map((todo, index) => (
								<CSSTransition
									key={todo.id}
									timeout={500}
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
