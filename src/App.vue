<template>
  <div id="app">
    <NewList :activeView="activeView" :changeView="changeView"/>
    <MainView 
      :visible="activeView === 'Main' ? true : false" 
      :list="list"
      :activeId="activeId"  
      :setActive="setActive"
    />
    <FormView 
      :visible="activeView === 'Form' ? true : false" 
      :changeView="changeView"
    />
  </div>
</template>

<script>
import MainView from './views/Main';
import FormView from './views/Form';
import NewList from './components/New';
import { getLists } from './utils';

export default {
  name: 'app',
  components: {
    MainView,
    FormView,
    NewList
  },
  data() {
    return {
      activeView: 'Form',
      list: [], 
      activeId: 0,
    }
  },
  created() {
    this.list = getLists();
    this.list[0].isActive = true;
  },
  methods: {
    changeView() {
      this.activeView = this.activeView === "Main" ? "Form" : "Main";
    },
    setActive(id) {
      this.list[id].isActive = true;
      this.list[this.activeId].isActive = false;
      this.activeId = id;
    }
  }
}

</script>

<style>

</style>
