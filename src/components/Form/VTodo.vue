<template>
  <div class="todo" @click="remove(id)">
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "FormTodo",
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    remove: {
      type: Function,
      required: true
    }
  }
};
</script>
