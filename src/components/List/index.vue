<template>
  <div class="list" v-on:wheel="handleScroll">
    <ListItem 
      v-for="item in list" 
      :item="item" 
      :key="item.id" 
      :isActive="item.isActive"
      :offset="offset"
      :setActive="setActive"
      :setTodo="setTodo"
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
    setTodo: Function
  },
  data() {
    return {
      list: [
        {
          title: 'Monday Workout',
          isActive: true,
          id: 0
        },
        {
          title: 'Attend Meeting',
          isActive: false,
          id: 1
        },
        {
          title: 'Study for Exam',
          isActive: false,
          id: 2
        },
        {
          title: 'Family Dinner',
          isActive: false,
          id: 3
        },
        {
          title: 'Tuesday Workout',
          isActive: false,
          id: 4
        },
        {
          title: 'Lunch',
          isActive: false,
          id: 5
        },
        {
          title: 'Study Maths',
          isActive: false,
          id: 6
        },
        {
          title: 'Go to class',
          isActive: false,
          id: 7
        },
        {
          title: 'Dinner',
          isActive: false,
          id: 8
        },
        {
          title: 'Wednesday Workout',
          isActive: false,
          id: 9
        },
        {
          title: 'Attend Meeting',
          isActive: false,
          id: 10
        },
        {
          title: 'Study for Exam',
          isActive: false,
          id: 11
        },
        {
          title: 'Family Dinner',
          isActive: false,
          id: 12
        },
        {
          title: 'Thursday Workout',
          isActive: false,
          id: 13
        },
        {
          title: 'Lunch',
          isActive: false,
          id: 14
        },
        {
          title: 'Study Maths',
          isActive: false,
          id: 15
        },
        {
          title: 'Go to class',
          isActive: false,
          id: 16
        },
        {
          title: 'Dinner',
          isActive: false,
          id: 17
        }
      ],
      activeId: 0,
      offset: 0,
      lastScroll: null
    }
  },
  methods: {
    setActive(id) {
      this.list[id].isActive = true;
      this.list[this.activeId].isActive = false;
      this.activeId = id;
    },
    handleScroll(e) {    
      const max = 0;
      const min = -146.5;
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
