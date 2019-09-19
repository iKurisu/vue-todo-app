<template>
  <div :class="[{ show: visible, hide: !visible }, 'fixed-container']">
    <List :list="list" :active-id="activeId" :set-active="setActive" />
    <TodoList :todo-list="list[activeId]" :check-todo="checkTodo" />
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
  props: {
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
  },
  computed: {
    ...mapGetters({
      visible: "mainIsVisible"
    })
  }
};
</script>
