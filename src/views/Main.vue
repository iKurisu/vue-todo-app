<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <List :setTodo="setTodo"/>
  </div>
</template>

<script>
import List from '../components/List';

export default {
  name: "MainView",
  components: {
    List
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    setTodo(todo) {
      this.activeTodo = todo;
    }
  }
}
</script>

<style lang="scss">

</style>

