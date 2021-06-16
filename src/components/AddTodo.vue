<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Создать</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const title = ref("");

    const onSubmit = () => {
      if (title.value.trim()) {
        const newTodo = {
          id: Date.now(),
          title: title.value,
          completed: false,
        };
        store.dispatch("addTodoActions", newTodo);
        title.value = "";
      }
    };

    return {
      title,
      onSubmit,
    };
  },
};
</script>
