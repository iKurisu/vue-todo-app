<template>
  <div class="form">
    <FormField 
      :name="'TITLE'" 
      :length="title.length" 
      :value="title" 
      @input="updateTitle" 
    /> 
    <FormField 
      :name="'ADD TODO'" 
      :length="todo.length" 
      :value="todo" 
      @input="updateTodo" 
    />
  </div>
</template>

<script>
import FormField from './VField';

export default {
  name: "Form",
  components: {
    FormField
  },
  data() {
    return {
      title: '',
      todo: ''
    }
  },
  methods: {
    updateTitle(value) {
      this.title = value.toUpperCase();
    },
    updateTodo(value) {
      this.todo = value.toUpperCase();
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20vh;
}

.form p {
  margin-bottom: 6px;
  color: #333;
}

.form input {
  background: transparent;
  width: 100%;
  height: 32px;
  padding-bottom: 2px;
  border-bottom: 1px solid #d8d7d6;

  position: relative;
  z-index: 2;
}
</style>


