import { createContext } from 'react';

type TodosContextType = Todo[];

export const TodosContext = createContext<TodosContextType>([]);
