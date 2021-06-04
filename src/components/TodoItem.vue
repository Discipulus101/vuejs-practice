<template>
  <li class="listItem">
    <span :class="{done: itemProp.completed}">
      <input class="checkbox" type="checkbox" @change="changeTodo()">
        <strong>{{index + 1}}</strong>
        {{itemProp.title}}
    </span>
    <button @click="$emit('remove-todo', itemProp.id)">&times;</button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
      index: {
        type: Number,
        default: 0
      }
    },

    data() {
      return {
        itemProp: this.todo
      }
    },

    methods: {
      changeTodo() {
        this.itemProp.completed = !this.itemProp.completed
      }
    },
  }
</script>

<style scoped>
  .listItem {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .checkbox {
    margin-right: 15px;
  }

  .done {
    text-decoration: line-through;
  }
</style>