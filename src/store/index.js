import Vue from "vue";
import Vuex from "vuex";
import view from "./modules/view";
import todoLists from "./modules/todoLists";
import form from "./modules/form";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    view,
    todoLists,
    form
  }
});

export default store;
