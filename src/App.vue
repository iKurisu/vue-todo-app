<template>
  <div id="app">
    <Navigation :set-form-type="setFormType" />
    <MainView />
    <FormView :type="formType" />
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
  data() {
    return {
      activeId: "",
      formType: "new"
    };
  },
  created() {
    this.loadLists();
  },
  methods: {
    ...mapMutations(["changeView"]),
    ...mapActions(["loadLists"]),
    setFormType(type) {
      this.formType = type;
    }
  }
};
</script>

<style></style>
