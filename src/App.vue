<template>
  <div id="app">
    <NewList :activeView="activeView" :changeView="changeView"/>
    <MainView :visible="activeView === 'Main' ? true : false" />
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

export default {
  name: 'app',
  components: {
    MainView,
    FormView,
    NewList
  },
  data() {
    return {
      activeView: 'Form'
    }
  },
  methods: {
    changeView() {
      this.activeView = this.activeView === "Main" ? "Form" : "Main";
    }
  }
}

</script>

<style>

</style>
