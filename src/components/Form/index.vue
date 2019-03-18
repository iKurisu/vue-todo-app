<template>
  <div class="form">
    <FormField 
      :name="'TITLE'" 
      :length="title.length" 
      :value="title" 
      @input="updateTitle" 
    /> 
    <FormField 
      :name="'DUE DATE (M / D / Y)'" 
      :length="dueDate.length" 
      :value="dueDate" 
      @input="updateDueDate" 
    />
    <form class="form-field-wrapper" @submit="addTodo">
      <FormField 
        :name="'ADD TODO'" 
        :length="todo.length" 
        :value="todo" 
        @input="updateTodo" 
      />
    </form>
    <div class="form-todos">
      <FormTodo 
        v-for="{ name, id } in todos" 
        :name="name" 
        :id="id"
        :key="id" 
        :remove="removeTodo"
      />
    </div>
    <div class="form-button" @click="submitList">
      <p>OK</p>
    </div>
  </div>
</template>

<script>
import uniqid from 'uniqid';
import FormField from './VField';
import FormTodo from './VTodo';
import { TodoList, Todo } from './utils';
import { getLists, post } from '../../utils';

export default {
  name: "Form",
  components: {
    FormField,
    FormTodo
  },
  data() {
    return {
      title: '',
      dueDate: '',
      todo: '',
      todos: []
    }
  },
  methods: {
    updateTitle(value) {
      this.title = value.toUpperCase();
    },
    updateDueDate(value) {
      this.dueDate = value.toUpperCase();
    },
    updateTodo(value) {
      this.todo = value.toUpperCase()
    },
    addTodo(e) {
      e.preventDefault();
      this.todos.push(new Todo(this.todo, uniqid()));
      this.todo = '';
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    submitList() {
      const id = getLists().length;
      post(new TodoList(this.title, this.dueDate, this.todos, uniqid()))
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

.form-field-wrapper {
  width: 15%;
}

.form-field-wrapper .form-field {
  width: 100%;
}

.form-todos {
  width: 15%;
  max-height: 29vh;
  overflow-y: hidden;
  margin-top: -12px;
}

.form-button {
  border: 2px solid #555;
  cursor: pointer;
  margin-top: 40px;
}

.form-button p {
  padding: 7px 30px 3px;
}
</style>


