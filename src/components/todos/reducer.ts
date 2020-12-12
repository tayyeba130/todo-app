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
			const draft = todos.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						complete: !todo.complete,
					};
				} else {
					return todo;
				}
			});
			return [...draft];
		}
		case 'clearCompleted': {
			let draft = todos.filter((todo) => todo.complete === false);
			return [...draft];
		}
		default:
			return todos;
	}
}
