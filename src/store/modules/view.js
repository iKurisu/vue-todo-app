const state = {
  activeView: "Form"
};

const getters = {
  formIsVisible(state) {
    return state.activeView === "Form";
  },
  mainIsVisible(state) {
    return state.activeView === "Main";
  }
};

const mutations = {
  changeView(state, view) {
    state.activeView = view || (state.activeView === "Form" ? "Main" : "Form");
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  mutations
};
