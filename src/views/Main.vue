<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <List 
      :list="list"
      :activeId="activeId"
      :setActive="setActive"
    />
    <TodoList 
      :todoList="list[activeId]"
      :checkTodo="checkTodo"
    />
  </div>
</template>

<script>
import List from '../components/List.vue';
import TodoList from '../components/TodoList.vue';

export default {
  name: "MainView",
  components: {
    List,
    TodoList,
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    activeId: {
      type: Number,
      required: true
    },
    setActive: {
      type: Function,
      required: true
    },
    checkTodo: {
      type: Function,
      required: true
    }
  }
}
</script>

