<template>
  <div class="form-todo" @click="remove(id)">
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
}
</script>

<style lang="scss">
.form-todo {
  height: 32px;
  margin-bottom: 10px;
  padding-left: 10px;
  font-family: "adobe-garamond-pro";
  cursor: pointer;
}
</style>
