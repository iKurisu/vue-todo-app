<template>
  <div class="nav">
    <NavigationButton
      :name="name"
      :activeView="activeView"
      :click="changeView"
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
    }
  },
  computed: {
    name() {
      return this.activeView === 'Main' ? 'NEW LIST' : 'GO BACK';
    }
  }
}
</script>

<style lang="scss">
.nav {
  position: absolute;
  top: 5vh;
  right: 10%;
  z-index: 20;

  display: flex;
}
</style>
