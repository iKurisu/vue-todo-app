<template>
  <div
    class="btn"
    @click="click"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <p>{{ name }}</p>
    <HoverLine :hovering="hovering" />
  </div>
</template>

<script>
import HoverLine from "../VHoverLine";

export default {
  name: "NavigationButton",
  components: {
    HoverLine
  },
  props: {
    name: {
      type: String,
      required: true
    },
    click: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      hovering: false
    };
  },
  methods: {
    setHover(bool) {
      this.hovering = bool;
    }
  }
};
</script>

<style lang="scss">
.btn {
  cursor: pointer;
}

.btn:not(:first-child):not(:last-child) {
  margin-right: 20px;
}

.btn p {
  color: #333;
  font-size: 12px;
}
</style>
