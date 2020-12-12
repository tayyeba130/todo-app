import React from 'react';
import FiltersStyle from './style';

export default function Filters() {
	return (
		<FiltersStyle>
			<div className="items-left">
				<span>5 items left</span>
			</div>
			<div className="filters">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<div className="clear-completed">
				<button>Clear Completed</button>
			</div>
		</FiltersStyle>
	);
}
