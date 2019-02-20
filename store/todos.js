export const SET_TODOS = "SET_TODOS";

export const state = () => ({
  todos: []
});

export const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos;
  }
};

export const actions = {
  SET_TODOS({ commit }, todos) {
    commit(SET_TODOS, todos);
  }
};
