<template>
  <div class="listContainer">
    <ul class="todoList">
      <TodoItem
        v-for="(todo, i) of todos"
        :todo="todo"
        :index="i"
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
    },
  },

  components: {
    TodoItem,
  },
};
</script>

<style scoped>
.listContainer {
  width: 100%;
}

.todoList {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style-type: none;
  margin: 20px 40px 0;
  padding: 0;
}
</style>
