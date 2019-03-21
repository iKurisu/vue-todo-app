<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <SideButton />
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
import List from '../components/List';
import TodoList from '../components/TodoList';
import SideButton from '../components/SideButton';

export default {
  name: "MainView",
  components: {
    List,
    TodoList,
    SideButton
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

