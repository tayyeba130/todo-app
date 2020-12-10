import { createContext, useContext } from 'react';

type TodosContextType = {
	todos: Todo[];
	dispatch: React.Dispatch<Action>;
};

export const TodosContext = createContext<TodosContextType>({
	todos: [],
	dispatch: () => {},
});

export const useTodos = () => useContext(TodosContext);
