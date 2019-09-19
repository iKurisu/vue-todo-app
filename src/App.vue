<template>
  <div id="app">
    <Navigation :delete-list="deleteList" :set-form-type="setFormType" />
    <MainView
      v-if="list.length > 0"
      :list="list"
      :active-id="activeId"
      :set-active="setActive"
      :check-todo="checkTodo"
    />
    <FormView
      :active-list="list[activeId]"
      :active-id="activeId"
      :type="formType"
      :add-list="addList"
      :update="update"
    />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import MainView from "./views/Main";
import FormView from "./views/Form";
import Navigation from "./components/Navigation";
import { getLists, updateTodo, updateLists, updateList } from "./utils";

export default {
  name: "App",
  components: {
    MainView,
    FormView,
    Navigation
  },
  data() {
    return {
      list: [],
      activeId: 0,
      formType: "new"
    };
  },
  created() {
    this.list = getLists();
    if (this.list.length > 0) {
      this.list[0].isActive = true;
      this.activeId = 0;
      this.changeView("Main");
    } else {
      this.changeView("Form");
    }
  },
  methods: {
    ...mapMutations(["changeView"]),
    setFormType(type) {
      this.formType = type;
    },
    addList(list) {
      this.list.push(list);
      this.setActive(this.list.length - 1);
    },
    update(list) {
      const { name, dueDate, todos } = list;

      updateList(this.activeId, { name, dueDate, todos });

      for (let property in list) {
        this.list[this.activeId][property] = list[property];
      }
    },
    deleteList() {
      this.list = this.list.filter((_, i) => i !== this.activeId);

      if (this.list.length) {
        this.setActive(0);
      }

      updateLists(this.list);
    },
    setActive(id) {
      if (this.list[this.activeId]) {
        this.list[this.activeId].isActive = false;
      }

      this.list[id].isActive = true;
      this.activeId = id;
    },
    checkTodo(id) {
      const { todos } = this.list[this.activeId];

      this.list[this.activeId].todos[id].checked = !todos[id].checked;
      updateTodo(this.activeId, id);
    }
  }
};
</script>

<style></style>
