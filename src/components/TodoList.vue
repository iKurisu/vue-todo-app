<template>
  <div class="tl">
    <p class="tl-header">{{ activeList.title }}</p>
    <div class="tl-todos">
      <p
        v-for="{ name, checked, id } in activeList.todos"
        :key="id"
        :class="['todo', { 'todo--checked': checked }]"
        @click="checkTodo(id)"
      >
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  computed: mapGetters(["activeList"]),
  methods: mapActions(["checkTodo"])
};
</script>

<style lang="scss">
.tl {
  width: 54%;
  position: absolute;
  top: calc(20vh - 4px);
  left: 46%;
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
  opacity: 0.5;
}

@media (max-width: 767px) {
  .tl {
    left: 40%;
  }
}
</style>
