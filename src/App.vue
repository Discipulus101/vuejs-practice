<template>
  <div class="mainContainer">
      <h1>Todo application</h1>
      <AddTodo
        @add-todo="addTodo"
      />
      <hr>
      <TodoList 
        :todos="todos"
        @remove-todo="removeTodo"
      />
  </div>
</template>

<script>
  import TodoList from "@/components/TodoList.vue";
  import AddTodo from "@/components/AddTodo.vue";

  export default {
    name: 'app',
    data() {
      return {
        todos: [
          {id:1, title: 'дело 1', completed: false},
          {id:2, title: 'дело 2', completed: false},
          {id:3, title: 'дело 3', completed: false},
        ]
      }
    },

    methods: {
      removeTodo(id) {
        this.todos = this.todos.filter(t => t.completed === false || t.id !== id)
      },
      addTodo(todo) {
        this.todos.push(todo)
      }
    },

    components: {
      TodoList, AddTodo
    }
  }
</script>

<style lang="scss">
  .mainContainer{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
</style>
