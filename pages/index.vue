<template>
  <div class="container">
    <h4>Todos</h4>
    <ul v-if="todos.todos.length > 0">
      <li
        v-for="todo in todos.todos"
        :key="todo.id"
      >{{ todo.title }}</li>
    </ul>

    <button @click="changeState">Change todos State</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      todos: ["todos"]
    })
  },
  methods: {
    changeState() {
      this.$store.dispatch("todos/SET_TODOS", []);
    }
  }
};
</script>
