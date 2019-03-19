<template>
  <div id="app">
    <Navigation 
      :activeView="activeView" 
      :changeView="changeView"
      :deleteList="deleteList"
      :setFormType="setFormType"
    />
    <MainView 
      v-if="list.length > 0"
      :visible="activeView === 'Main' ? true : false" 
      :list="list"
      :activeId="activeId"  
      :setActive="setActive"
      :checkTodo="checkTodo"
    />
    <FormView 
      :visible="activeView === 'Form' ? true : false" 
      :activeList="list[activeId]"
      :activeId="activeId"
      :type="formType"
      :changeView="changeView"
      :addList="addList"
      :update="update"
    />
  </div>
</template>

<script>
import MainView from './views/Main';
import FormView from './views/Form';
import Navigation from './components/Navigation';
import { getLists, updateTodo, updateLists, updateList } from './utils';

export default {
  name: 'app',
  components: {
    MainView,
    FormView,
    Navigation
  },
  data() {
    return {
      list: [], 
      activeView: '',
      activeId: 0,
      formType: 'new'
    }
  },
  created() {
    this.list = getLists();
    if (this.list.length > 0) {
      this.list[0].isActive = true;
      this.activeId = 0;
      this.activeView = 'Main';
    } else {
      this.activeView = 'Form';
    }
  },
  methods: {
    changeView() {
      this.activeView = this.activeView === "Main" ? "Form" : "Main";
    },
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
      this.list[this.activeId].isActive = false;
      this.list[id].isActive = true;
      this.activeId = id;
    },
    checkTodo(id) {
      const { todos } = this.list[this.activeId];

      this.list[this.activeId].todos[id].checked = !todos[id].checked;
      updateTodo(this.activeId, id);
    }
  }
}

</script>

<style>

</style>
