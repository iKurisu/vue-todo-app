<template>
  <div class="nav top">
    <NavigationButton
      v-show="formIsVisible && !listIsEmpty"
      :name="'GO BACK'"
      :click="setNewForm"
    />
    <NavigationButton
      v-show="mainIsVisible"
      :name="'NEW LIST'"
      :click="setNewForm"
    />
    <NavigationButton
      v-show="mainIsVisible"
      :name="'EDIT LIST'"
      :click="setEditForm"
    />
    <NavigationButton
      v-show="mainIsVisible"
      :name="'DELETE LIST'"
      :click="deleteList"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import NavigationButton from "./navigation/Button.vue";

export default {
  name: "Navigation",
  components: {
    NavigationButton
  },
  computed: {
    ...mapState({
      activeView: ({ view }) => view.activeView
    }),
    ...mapGetters(["listIsEmpty", "formIsVisible", "mainIsVisible"])
  },
  methods: {
    ...mapMutations(["changeView", "setFormType"]),
    ...mapActions(["deleteList"]),
    setNewForm() {
      this.changeView();
      this.setFormType("New");
    },
    setEditForm() {
      this.changeView();
      this.setFormType("Edit");
    }
  }
};
</script>

<style lang="scss">
.nav {
  display: flex;
  z-index: 20;
}

@media (max-width: 1366px) {
  .nav {
    right: 5%;
  }
}

@media (min-width: 1366px) {
  .nav {
    right: 7%;
  }
}

@media (min-width: 1920px) {
  .nav {
    right: 10%;
  }
}
</style>
