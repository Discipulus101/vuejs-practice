<template>
  <li class="listItem">
    <span :class="{ done: itemProp.completed }">
      <input
        class="checkbox"
        type="checkbox"
        @change="completeTodo(itemProp.completed, itemProp)"
      />
      <strong>{{ index + 1 }}</strong>
      <router-link
        :to="{ name: 'todoItemPage', params: { id: itemProp.id } }"
        >{{ itemProp.title }}</router-link
      >
    </span>
    <button @click="removeTodo(itemProp.id)">&times;</button>
  </li>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const store = useStore();
    const itemProp = reactive(props.todo);

    const completeTodo = (completed, todo) => {
      todo.completed = !completed;
      store.dispatch("editTodoActions", todo);
    };

    const removeTodo = (id) => {
      store.dispatch("removeTodoActions", id);
    };

    return {
      itemProp,
      completeTodo,
      removeTodo,
    };
  },
});
</script>

<style scoped>
.listItem {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

strong {
  margin-right: 5px;
}

.checkbox {
  margin-right: 15px;
}

.done {
  text-decoration: line-through;
}
</style>
