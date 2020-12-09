import { v4 as uuid } from 'uuid';

export default function todosReducer(todos: Todo[], action: Action) {
	switch (action.type) {
		case 'add':
			return [
				...todos,
				{ text: action.payload, complete: false, id: uuid() },
			];
		case 'delete':
			return todos.filter((todo) => todo.id === action.payload);
		case 'toggle': {
			let todo = todos.find((todo) => todo.id === action.payload)!;
			todo.complete = !todo.complete;
			return [...todos, todo];
		}
		default:
			return todos;
	}
}
