<template>
  <div class="mainContainer">
    <router-link to="/" class="homeLink">Home</router-link>
    <AddTodo />

    <select class="select" v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>

    <TodoList v-if="filteredTodos.length" :todos="filteredTodos" />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "app",

  setup() {
    const store = useStore();
    const filter = ref("all");

    const allTodos = computed(() => store.getters.allTodos);

    const filteredTodos = computed(() => {
      switch (filter.value) {
        case "all":
          return allTodos.value;

        case "completed":
          return allTodos.value.filter((t) => t.completed);

        case "not-completed":
          return allTodos.value.filter((t) => !t.completed);

        default:
          return allTodos.value;
      }
    });

    return {
      filter,
      allTodos,
      filteredTodos,
    };
  },

  components: {
    TodoList,
    AddTodo,
  },
};
</script>

<style scoped>
.select {
  margin-top: 20px;
}

.homeLink {
  margin-bottom: 35px;
}
</style>
