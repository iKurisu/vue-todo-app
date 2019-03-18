<template>
  <div class="list" v-on:wheel="handleScroll">
    <ListItem 
      v-for="({ name, id, isActive }, i) in list" 
      :name="name" 
      :id="i"
      :key="id" 
      :isActive="isActive"
      :offset="offset"
      :setActive="setActive"
    />
  </div>
</template>

<script>
import ListItem from './Item.vue';

export default {
  name: 'List',
  components: {
    ListItem
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    activeId: {
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
      offset: 0,
      lastScroll: null
    }
  },
  methods: {
    handleScroll(e) {    
      const itemHeight = 37;
      const max = 0;
      const min = -(this.list.length - 16) * itemHeight - 21;
      const d = 148;
        
      if (Date.now() - this.lastScroll < 200) return;

      this.lastScroll = Date.now();      
      
      if (e.deltaY > 0 && this.offset > min) {
        this.offset -= d;
      } else if (e.deltaY < 0 && this.offset < max) {
        this.offset += d;
      }
    }
  }
}
</script>

<style lang="scss">
.list {
  height: 50vh;
  overflow-y: hidden;
  margin-left: 10%;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
