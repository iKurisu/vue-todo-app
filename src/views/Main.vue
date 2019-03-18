<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <List 
      :list="list"
      :activeId="activeId"
      :setActive="setActive"
    />
    <TodoList 
      :todoList="list[activeId]"
    />
  </div>
</template>

<script>
import List from '../components/List';
import TodoList from '../components/TodoList';

export default {
  name: "MainView",
  components: {
    List,
    TodoList
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
    }
  }
}
</script>

<style lang="scss">

</style>

