<template>
  <div class="nav">
    <NavigationButton
      :name="name"
      :activeView="activeView"
      :changeView="changeView"
      :click="setNewForm"
    />
    <NavigationButton
      v-if="activeView === 'Main'"
      :name="'EDIT LIST'"
      :activeView="activeView"
      :click="setEditForm"
    />
    <NavigationButton
      v-if="activeView === 'Main'"
      :name="'DELETE LIST'"
      :activeView="activeView"
      :click="deleteList"
    />
  </div>
</template>

<script>
import NavigationButton from './Button';

export default {
  name: 'Navigation',
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
      return this.activeView === 'Main' ? 'NEW LIST' : 'GO BACK';
    }
  },
  methods: {
    setNewForm() {
      this.changeView();
      this.setFormType('new');
    },
    setEditForm() {
      this.changeView();
      this.setFormType('edit');
    }
  }
}
</script>

<style lang="scss">
.nav {
  position: absolute;
  top: 3vh;
  right: 5%;
  z-index: 20;

  display: flex;
}

@media (max-width: 768px) {
  .nav {
    top: 3vh;
    right: 5%;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .nav {
    top: 7vh;
  }
}

@media (min-width: 768px) {
  .nav {
    top: 3vh;
  }
}

@media (min-width: 768px) and (orientation: landscape) {
  .nav {
    top: calc(2vh + 20px);
  }
}

@media (min-width: 1000px) and (orientation: landscape) {
  .nav {
    top: calc(3vh + 20px);
  }
}

@media (min-width: 1366px) {
  .nav {
    right: 7%;
  }
}

@media (min-width: 1920px) {
  .nav {
    top: 5vh;
    right: 10%;
  }
}
</style>
