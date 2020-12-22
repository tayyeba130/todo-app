import React, { useEffect, useState } from 'react';
import { Filter, useTodos } from '../../contexts/DumbName';
import FiltersStyle from './style';
import { useTheme } from '../../contexts/ThemeContext';

export default function Filters() {
	const { filter, setFilter, todos, dispatch } = useTodos();
	const [itemsLeft, setItemsLeft] = useState(0);
	const { theme } = useTheme();

	useEffect(() => {
		const draftItemsLeft = todos.reduce(
			(total, currentTodo) =>
				currentTodo.complete === false ? (total = total + 1) : total,
			0
		);
		setItemsLeft(draftItemsLeft);
	}, [todos]);

	return (
		<FiltersStyle theme={theme}>
			<div className="items-left">
				<span>{`${itemsLeft} items left`}</span>
			</div>
			<div className="filters">
				<button
					className={filter === Filter.All ? 'selected' : undefined}
					onClick={() => setFilter(Filter.All)}
				>
					All
				</button>
				<button
					className={
						filter === Filter.Active ? 'selected' : undefined
					}
					onClick={() => setFilter(Filter.Active)}
				>
					Active
				</button>
				<button
					className={
						filter === Filter.Completed ? 'selected' : undefined
					}
					onClick={() => setFilter(Filter.Completed)}
				>
					Completed
				</button>
			</div>
			<div className="clear-completed">
				<button
					onClick={() =>
						dispatch({ type: 'clearCompleted', payload: '' })
					}
				>
					Clear Completed
				</button>
			</div>
		</FiltersStyle>
	);
}
