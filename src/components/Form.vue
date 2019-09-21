<template>
  <div class="form">
    <FormField
      :name="'TITLE'"
      :length="title.length"
      :error="titleError"
      :value="title"
      @input="updateTitle"
    />
    <FormField
      :name="'DUE DATE (M / D / Y)'"
      :length="dueDate.length"
      :error="dateError"
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
        v-for="todoItem in todos"
        :key="todoItem.id"
        :todo="todoItem"
        :remove="removeTodo"
      />
    </div>
    <div class="form-button" @click="submitList">
      <p>OK</p>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState, mapGetters } from "vuex";
import uniqid from "uniqid";
import FormField from "./form/VField";
import FormTodo from "./form/VTodo";

export default {
  name: "Form",
  components: {
    FormField,
    FormTodo
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: "",
      dueDate: "",
      todo: "",
      todos: [],
      titleError: false,
      dateError: false
    };
  },
  computed: {
    ...mapState({
      activeListId: state => state.todoLists.activeListId
    }),
    ...mapGetters(["activeList"])
  },
  watch: {
    type() {
      this.updateFields();
    },
    activeList() {
      this.updateFields();
    }
  },
  methods: {
    ...mapMutations(["changeView"]),
    ...mapActions(["addList", "updateList"]),
    updateFields() {
      if (this.type === "edit") {
        const date = new Date(this.activeList.dueDate);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        this.title = this.activeList.title;
        this.dueDate = `${month}/${day}/${year}`;
        this.todos = this.activeList.todos;
      } else {
        this.title = "";
        this.dueDate = "";
        this.todos = [];
      }
    },
    updateTitle(value) {
      this.title = value.toUpperCase();
    },
    updateDueDate(value) {
      this.dueDate = value.toUpperCase();
    },
    updateTodo(value) {
      this.todo = value.toUpperCase();
    },
    addTodo(e) {
      e.preventDefault();
      this.todos.push({ name: this.todo, id: uniqid(), checked: false });
      this.todo = "";
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    submitList() {
      const [month, day, year] = this.dueDate.split("/");
      const dueDate = new Date(year, month - 1, day, 23, 59, 59);

      this.titleError = this.title === "";
      this.dateError = !dueDate.getTime() || dueDate.getTime() < Date.now();

      if (!this.titleError && !this.dateError) {
        if (this.type === "new") {
          this.addList({
            dueDate,
            title: this.title,
            todos: this.todos,
            id: uniqid(),
            isActive: true
          });
        } else {
          this.updateList({
            dueDate,
            title: this.title,
            todos: this.todos,
            id: this.activeListId
          });
        }

        this.changeView();
      }
    }
  }
};
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

@media (max-width: 768px) {
  .form {
    margin-top: 15vh;
  }

  .form-field {
    margin-bottom: 20px;
  }

  .form-field,
  .form-field-wrapper,
  .form-todos {
    width: 55%;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .form-field {
    margin-bottom: 10px;
  }

  .form-field,
  .form-field-wrapper,
  .form-todos {
    width: 55%;
    max-width: 75vh;
  }
}

@media (min-width: 768px) {
  .form {
    margin-top: 15vh;
  }

  .form-field {
    margin-bottom: 3vh;
  }

  .form-field,
  .form-field-wrapper,
  .form-todos {
    width: 40%;
  }
}

@media (min-width: 768px) and (orientation: landscape) {
  .form {
    margin-top: 15vh;
  }

  .form-field {
    margin-bottom: 3vh;
  }

  .form-field,
  .form-field-wrapper,
  .form-todos {
    width: 35%;
  }
}

@media (min-width: 1000px) {
  .form-field {
    margin-bottom: 20px;
  }
}

@media (min-width: 1000px) and (orientation: landscape) {
  .form {
    margin-top: 15vh;
  }

  .form-field,
  .form-field-wrapper,
  .form-todos {
    width: 35%;
  }
}

@media (min-width: 1366px) {
  .form-field {
    margin-bottom: 30px;
  }

  .form-field,
  .form-field-wrapper,
  .form-todos {
    width: 30%;
    max-width: 55vh;
  }
}

@media (min-width: 1920px) {
  .form-field {
    margin-bottom: 40px;
  }

  .form-field,
  .form-field-wrapper,
  .form-todos {
    width: 20%;
  }
}
</style>
