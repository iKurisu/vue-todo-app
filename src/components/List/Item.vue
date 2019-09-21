<template>
  <div
    class="list-item"
    :style="{ transform: `translate3d(0, ${offset}px, 0)` }"
    @click="setActiveListId(list.id)"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <p>{{ list.title }}</p>
    <HoverLine :hovering="hovering" :is-active="activeListId === list.id" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import HoverLine from "../VHoverLine";

export default {
  name: "ListItem",
  components: {
    HoverLine
  },
  props: {
    list: {
      type: Object,
      required: true
    },
    activeListId: {
      type: String,
      required: true
    },
    offset: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      hovering: false
    };
  },
  methods: {
    ...mapMutations(["setActiveListId"]),
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
