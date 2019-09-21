<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <List />
    <TodoList />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import List from "../components/List.vue";
import TodoList from "../components/TodoList.vue";

export default {
  name: "MainView",
  components: {
    List,
    TodoList
  },
  computed: {
    ...mapGetters({
      visible: "mainIsVisible"
    })
  }
};
</script>
