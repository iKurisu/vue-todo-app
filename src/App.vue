<template>
  <div id="app">
    <Navigation />
    <MainView />
    <FormView />
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import MainView from "./views/Main";
import FormView from "./views/Form";
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    MainView,
    FormView,
    Navigation
  },
  created() {
    this.loadLists();
  },
  methods: {
    ...mapMutations(["changeView"]),
    ...mapActions(["loadLists"])
  }
};
</script>

<style></style>
