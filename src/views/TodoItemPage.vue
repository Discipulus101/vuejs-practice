<template>
  <div class="container">
    <router-link to="/todos">Go back to to-do list</router-link>
    <div class="todoInfo">{{ todo.title }}</div>

    <form @submit.prevent="onSubmit">
      <input type="text" v-model="title" />
      <button type="submit">Apply changes</button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "TodoItemPage",
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },

  setup() {
    const store = useStore();
    const route = useRoute();

    const id = Number(route.params.id);

    const allTodos = computed(() => store.getters.allTodos);

    const todo = computed(() => allTodos.value.find((todo) => todo.id == id));
    const title = ref(todo.value.title);

    const onSubmit = () => {
      if (title.value.trim()) {
        todo.value.title = title;
        store.dispatch("editTodoActions", todo);
      }
    };

    return {
      title,
      todo,
      onSubmit,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todoInfo {
  margin-top: 35px;
  padding: 10px;
  border-radius: 5px;
  background-color: lightgreen;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 200px;
}
</style>
