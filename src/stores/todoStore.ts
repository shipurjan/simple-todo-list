import { writable } from 'svelte/store';

export type Todo = {
	text: string;
	completed: boolean;
	id: number;
};

export const todos = writable<Todo[]>([]);

export const addTodo = (text: string) => {
	if (text === '') return todos;
	todos.update((cur: Todo[]) => {
		const newTodos = [...cur, { text, completed: false, id: Date.now() } as Todo];
		return newTodos;
	});
};

export const deleteTodo = (id: number) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id: number) => {
	todos.update((todos) => {
		const targetedTodo = todos.find((e) => e.id === id);
		if (targetedTodo === undefined) return todos;
		targetedTodo.completed = !targetedTodo.completed;
		return todos;
	});
};
