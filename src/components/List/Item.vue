<template>
  <div class="list-item" 
    @click="[setActive(id), setTodo(name)]"
    @mouseover="setHover(true)" 
    @mouseleave="setHover(false)"
    :style="{ transform: `translate3d(0, ${offset}px, 0)` }"
  >
    <p>{{ name.toUpperCase() }}</p>
    <HoverLine :hovering="hovering" :isActive="isActive" />
  </div>
</template>

<script>
import HoverLine from '../VHoverLine';

export default {
  name: 'ListItem',
  components: {
    HoverLine
  },
  props: {
    name: String,
    id: Number,
    isActive: Boolean,
    offset: Number,
    setActive: Function,
    setTodo: Function
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
  }
}
</script>

<style lang="scss">
.list-item {
  margin-bottom: 16px;
  cursor: pointer;
  will-change: transform;
  transition: transform .5s ease;
}

.list-item p {
  color: #1a1a1a;
  width: 100%;
}
</style>