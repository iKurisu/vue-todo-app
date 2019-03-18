<template>
  <div class="tl">
    <p class="tl-header">{{ todoList.name }}</p>
    <div class="tl-todos">
      <p 
        :class="['todo', { 'todo--checked': todo.checked}]" 
        v-for="(todo, i) in todoList.todos" 
        :key="todo.id"
        @click="checkTodo(i)"
      >
        {{ todo.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoList: {
      type: Object,
      required: true
    },
    checkTodo: {
      type: Function,
      required: true
    }
  },
}
</script>

<style lang="scss">
.tl {
  width: 20%;
  position: absolute;
  top: calc(20vh - 4px);
  right: 34%;
}

.tl-header {
  font-size: 18px;
  color: #333;
  margin-bottom: 30px;
}

.tl-todos .todo {
  padding-left: 0;
}

.todo--checked {
  text-decoration: line-through;
  opacity: .5;
}
</style>
