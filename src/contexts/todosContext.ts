import { createContext } from 'react';

type TodosContextType = {
	state: Todo[];
	dispatch: React.Dispatch<Action>;
};

export const TodosContext = createContext<TodosContextType>({
	state: [],
	dispatch: () => {},
});
