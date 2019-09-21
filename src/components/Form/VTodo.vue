<template>
  <div class="todo" @click="remove(todo.id)">
    <p>{{ todo.name }}</p>
  </div>
</template>

<script>
export default {
  name: "FormTodo",
  props: {
    todo: {
      type: Object,
      required: true
    },
    remove: {
      type: Function,
      required: true
    }
  }
};
</script>
