<template>
  <div>
    <template v-if="!data && !error">
      <p class="info">Fetching data, kindly drink a beer while waiting...</p>
    </template>
    <template v-if="error">
      <p class="danger">API don get accident abeg free me</p>
    </template>
    <template v-if="data">
      <ul>
        <li
          class="todo-item"
          v-for="todo in data"
          :key="todo.id"
          @mouseover="prefetch(todo.id)"
        >
          {{ todo.title }} <br />
          <router-link :to="`/todo/${todo.id}`">View Me</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import useSWRV, { mutate } from "swrv";

export default {
  setup() {
    const { data, error } = useSWRV(
      "https://jsonplaceholder.typicode.com/todos"
    );

    return {
      data,
      error,
    };
  },
  methods: {
    prefetch(id) {
      mutate(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
          res.json()
        )
      );
    },
  },
};
</script>

<style scoped>
.todo-item {
  font-size: 1.2rem;
  padding: 1em;
  text-align: left;
}
</style>
