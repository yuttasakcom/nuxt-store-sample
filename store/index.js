import axios from "axios";

import { SET_TODOS } from "./todos";

const todosModule = "todos";

export const strict = true;

export const state = () => ({
  root: []
});

export const actions = {
  nuxtServerInit(vuex, ctx) {
    return axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      vuex.commit(`${todosModule}/${SET_TODOS}`, res.data.slice(0, 10));
    });
  }
};
