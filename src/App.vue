<template>
  <div id="app">
    <NewList :activeView="activeView" :changeView="changeView"/>
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
      :changeView="changeView"
      :addList="addList"
    />
  </div>
</template>

<script>
import MainView from './views/Main';
import FormView from './views/Form';
import NewList from './components/New';
import { getLists, updateTodo } from './utils';

export default {
  name: 'app',
  components: {
    MainView,
    FormView,
    NewList
  },
  data() {
    return {
      list: [], 
      activeView: '',
      activeId: 0,
    }
  },
  created() {
    this.list = getLists();
    if (this.list.length > 0) {
      this.list[0].isActive = true;
      this.activeView = 'Main';
    } else {
      this.activeView = 'Form';
    }
  },
  methods: {
    changeView() {
      this.activeView = this.activeView === "Main" ? "Form" : "Main";
    },
    addList(list) {
      this.list.push(list);
    },
    setActive(id) {
      this.list[id].isActive = true;
      this.list[this.activeId].isActive = false;
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
