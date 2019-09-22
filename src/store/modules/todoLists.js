import {
  getLists,
  updateLists as updateStoredLists
} from "../../utils/localStorage";

const state = {
  lists: [],
  activeListId: ""
};

const getters = {
  activeList({ lists, activeListId }) {
    return (
      lists.find(list => list.id === activeListId) || {
        title: "",
        dueDate: "",
        todos: [],
        id: ""
      }
    );
  }
};

const mutations = {
  addStoredLists(state) {
    state.lists = getLists();
  },
  pushList(state, list) {
    state.lists.push(list);
  },
  setActiveListId(state, id) {
    state.activeListId = id;
  },
  updateList(state, updatedList) {
    state.lists = state.lists.map(list =>
      list.id === updatedList.id ? updatedList : list
    );
  },
  deleteList(state) {
    state.lists = state.lists.filter(list => list.id !== state.activeListId);
  },
  checkTodo(state, todoId) {
    state.lists = state.lists.map(list =>
      list.id === state.activeListId
        ? {
            ...list,
            todos: list.todos.map(todo =>
              todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
            )
          }
        : list
    );
  }
};

const actions = {
  loadLists({ state, commit }) {
    commit("addStoredLists");

    if (state.lists.length > 0) {
      commit("setActiveListId", state.lists[0].id);
      commit("changeView", "Main", { root: true });
    }
  },
  addList({ state, commit }, list) {
    commit("pushList", list);
    commit("setActiveListId", list.id);
    updateStoredLists(state.lists);
  },
  updateList({ state, commit }, updatedList) {
    commit("updateList", updatedList);
    updateStoredLists(state.lists);
  },
  deleteList({ state, commit }) {
    commit("deleteList");
    commit("setActiveListId", state.lists.length > 0 ? state.lists[0].id : "");
    updateStoredLists(state.lists);
  },
  checkTodo({ state, commit }, todoId) {
    commit("checkTodo", todoId);
    updateStoredLists(state.lists);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
