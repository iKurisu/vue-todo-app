<template>
  <div class="nav top">
    <NavigationButton
      v-if="activeView === 'Form'"
      :name="'GO BACK'"
      :click="setNewForm"
    />
    <NavigationButton
      v-if="activeView === 'Main'"
      :name="'NEW LIST'"
      :click="setNewForm"
    />
    <NavigationButton
      v-if="activeView === 'Main'"
      :name="'EDIT LIST'"
      :click="setEditForm"
    />
    <NavigationButton
      v-if="activeView === 'Main'"
      :name="'DELETE LIST'"
      :click="deleteList"
    />
  </div>
</template>

<script>
import NavigationButton from "./navigation/Button.vue";

export default {
  name: "Navigation",
  components: {
    NavigationButton
  },
  props: {
    activeView: {
      type: String,
      required: true
    },
    changeView: {
      type: Function,
      required: true
    },
    deleteList: {
      type: Function,
      required: true
    },
    setFormType: {
      type: Function,
      required: true
    }
  },
  computed: {
    name() {
      return this.activeView === "Main" ? "NEW LIST" : "GO BACK";
    }
  },
  methods: {
    setNewForm() {
      this.changeView();
      this.setFormType("new");
    },
    setEditForm() {
      this.changeView();
      this.setFormType("edit");
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
