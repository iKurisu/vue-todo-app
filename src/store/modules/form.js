const state = {
  type: "New"
};

const mutations = {
  setFormType({ state }, type) {
    state.type = type;
  }
};

export default {
  state,
  mutations
};
