<template>
  <div
    class="list-item"
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
