<template>
  <div>
    <div v-if="!data && !error">Fetching current post chill out...</div>
    <div v-if="error">kasala don box oooo</div>
    <div v-if="data">
        <h3>{{data.title}}</h3>
        <p>Is Completed: {{ data.completed}}</p>
        <p>By User {{data.userId}}</p>
        <div class="button" @click="$router.go(-1)">Go back</div>
    </div>
  </div>
</template>

<script>
import useSWRV from "swrv";

export default {
  setup(_, context) {
    const route = context.root.$route;

    const { data, error } = useSWRV(
      `https://jsonplaceholder.typicode.com/todos/${route.params.id}`
    );
    return {
      data,
      error,
    };
  },
};
</script>

<style>
.button {
    border-radius: 8px;
    border: 1px solid brown;
    display: inline-block;
    padding: 0.5rem;
    cursor: pointer;
    margin-top: 3rem;
    
}
</style>
