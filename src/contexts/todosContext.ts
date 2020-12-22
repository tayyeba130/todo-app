import { createContext, useContext } from 'react';

export enum Filter {
	All = 'All',
	Active = 'Active',
	Completed = 'Completed',
}

type TodosContextType = {
	todos: Todo[];
	dispatch: React.Dispatch<Action>;
	filter: Filter;
	setFilter: React.Dispatch<React.SetStateAction<Filter>>;
};

export const TodosContext = createContext<TodosContextType>({
	todos: [],
	dispatch: () => {},
	filter: Filter.All,
	setFilter: () => {},
});

export const useTodos = () => useContext(TodosContext);
