export default {
  state: {
    todos: [
      { id: 1, title: "Очень важное дело", completed: false },
      { id: 2, title: "Чуть менее важное дело", completed: false },
      { id: 3, title: "Пустяковое дело", completed: false },
    ],
  },

  mutations: {
    addTodoMutations(state: any, todo: any) {
      state.todos.push(todo);
    },

    editTodoMutations(state: any, todo: any) {
      const todoIndex: number = state.todos.findIndex(
        (t: any) => t.id == todo.id
      );
      state.todos[todoIndex] = todo;
    },

    removeTodoMutations(state: any, id: any) {
      state.todos = state.todos.filter(
        (t: any) => t.completed === false || t.id !== id
      );
    },
  },

  actions: {
    addTodoActions(ctx: any, todo: any) {
      ctx.commit("addTodoMutations", todo);
    },

    editTodoActions(ctx: any, todo: any) {
      ctx.commit("editTodoMutations", todo);
    },

    removeTodoActions(ctx: any, id: any) {
      ctx.commit("removeTodoMutations", id);
    },
  },

  getters: {
    allTodos(state: any) {
      return state.todos;
    },
  },
};
