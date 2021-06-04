<template>
  <div class="listContainer">
    <ul class="todoList">
      <TodoItem 
        v-for="(todo, i) of todos" 
        :todo="todo"
        :index="i"
        @remove-todo="removeTodo"
        :key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
  import TodoItem from "@/components/TodoItem.vue";
  export default {
    props: {
      todos: {
        type: Array,
        required: true,
      }
    },

    components: {
      TodoItem,
    },

    methods: {
      removeTodo(id) {
        this.$emit('remove-todo', id)
      }
    }
  }
</script>

<style scoped>
  .listContainer{
    width: 100%;
  }

  .todoList{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
    margin: 0 40px;
    padding: 0;
  }
</style>
