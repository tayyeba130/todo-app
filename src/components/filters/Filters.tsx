import React from 'react';
import FiltersStyle from './style';
import { useTodos, Filter } from '../../contexts/TodosContext';

export default function Filters() {
	const { setFilter, dispatch } = useTodos();
	return (
		<FiltersStyle>
			<div className="items-left">
				<span>5 items left</span>
			</div>
			<div className="filters">
				<button onClick={() => setFilter(Filter.All)}>All</button>
				<button onClick={() => setFilter(Filter.Active)}>Active</button>
				<button onClick={() => setFilter(Filter.Completed)}>
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
