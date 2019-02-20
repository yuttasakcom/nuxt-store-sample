import axios from "axios";

import { SET_TODOS } from "./todos";

const todosModule = "todos";

export const strict = true;

export const state = () => ({
  root: []
});

export const actions = {
  async nuxtServerInit(vuex, ctx) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    vuex.dispatch(`${todosModule}/${SET_TODOS}`, res.data.slice(0, 10));
  }
};
