<template>
  <div class="list-wrapper" @wheel="handleScroll">
    <div class="list" :style="{ transform: `translate3d(0, ${offset}px, 0)` }">
      <ListItem
        v-for="list in lists"
        :key="list.id"
        :list="list"
        :active-list-id="activeListId"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "./list/Item.vue";

export default {
  name: "List",
  components: {
    ListItem
  },
  data() {
    return {
      offset: 0,
      lastScroll: null
    };
  },
  computed: {
    ...mapState({
      lists: state => state.todoLists.lists,
      activeListId: state => state.todoLists.activeListId
    }),
    listsShown() {
      const wrapperHeight = window.innerHeight / 2;
      const itemHeight = 38;

      return Math.floor(wrapperHeight / itemHeight);
    }
  },
  methods: {
    handleScroll(e) {
      const itemHeight = 38;
      const max = 0;
      const min = -(this.lists.length - this.listsShown) * itemHeight;
      const d = 148 > Math.abs(min) ? Math.abs(min) : 148;

      if (Date.now() - this.lastScroll < 200) return;

      this.lastScroll = Date.now();

      if (e.deltaY > 0 && this.offset > min) {
        this.offset -= d;
      } else if (e.deltaY < 0 && this.offset < max) {
        this.offset += d;
      }
    }
  }
};
</script>

<style lang="scss">
.list-wrapper {
  height: 50vh;
  overflow-y: hidden;
  margin-left: 10%;
  margin-top: 20vh;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  will-change: transform;
  transition: transform 0.5s ease;
}

@media (max-width: 767px) {
  .list-wrapper {
    margin-left: 5%;
  }
}
</style>
