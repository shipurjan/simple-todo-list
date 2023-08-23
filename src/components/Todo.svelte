<script>
	import { toggleTodoCompleted, deleteTodo } from '../stores/todoStore';

	/**
	 // @type {{ completed: any; id: number; text: any; }}
	 */
	export let todo;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
	<label class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
		<input
			name="completed"
			type="checkbox"
			checked={todo.completed}
			on:change={() => toggleTodoCompleted(todo.id)}
			class="mr-2 h-5 w-5 shadow-sm"
		/>
		{todo.text}
	</label>
	<button
		type="button"
		class="text-sm bg-red-500 hover:bg-red-600 border border-red-100 h-6 w-6 shadow-sm text-white m-px p-px rounded-lg focus:outline-none focus:shadow-outline"
		on:click={() => deleteTodo(todo.id)}
	>
		X
	</button>
</li>
