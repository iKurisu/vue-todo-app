<template>
  <div
    class="list-item"
    :style="{ transform: `translate3d(0, ${offset}px, 0)` }"
    @click="setActive(id)"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <p>{{ name }}</p>
    <HoverLine :hovering="hovering" :is-active="isActive" />
  </div>
</template>

<script>
import HoverLine from "../VHoverLine";

export default {
  name: "ListItem",
  components: {
    HoverLine
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    },
    offset: {
      type: Number,
      required: true
    },
    setActive: {
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
.list-item {
  margin-bottom: 16px;
  cursor: pointer;
  will-change: transform;
  transition: transform 0.5s ease;
}

.list-item p {
  color: #1a1a1a;
  width: 100%;
}

@media (max-width: 767px) {
  .list-item p {
    font-size: 2.3vw;
  }
}
</style>
