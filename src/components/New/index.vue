<template>
  <div class="btn" 
    @click="changeView"
    @mouseover="setHover(true)" 
    @mouseleave="setHover(false)"  
  >
    <p>{{ name }}</p>
    <HoverLine :hovering="hovering" />
  </div>
</template>

<script>
import HoverLine from '../VHoverLine';

export default {
  name: "NewList",
  components: {
    HoverLine
  },
  props: {
    activeView: {
      type: String,
      required: true
    },
    changeView: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      hovering: false
    }
  },
  methods: {
    setHover(bool) {
      this.hovering = bool;
    }
  },
  computed: {
    name() {
      return this.activeView === "Main" ? "NEW LIST" : "GO BACK"
    }
  }
}
</script>

<style lang="scss">
.btn {
  position: absolute;
  top: 5vh;
  right: 10%;
  cursor: pointer;
  z-index: 20;
}

.btn p {
  color: #333;
  font-size: 12px;
}
</style>