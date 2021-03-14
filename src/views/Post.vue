<template>
  <div>
    <div v-if="!data && !error">Fetching current post chill out...</div>
    <div v-if="error">kasala don box oooo</div>
    <div v-if="data" class="body">
        <h2 class="title">{{ data.title }}</h2>
        <p class="info">{{ data.body }}</p>
        <p>By User {{ data.userId }}</p>

    </div>
    <div class="button" @click="$router.go(-1)">Go back</div>
  </div>
</template>

<script>
import useSWRV from "swrv";

export default {
  setup(_, context) {
     const route = context.root.$route

    const { data, error } = useSWRV(
      `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
    );
    return {
      data,
      error,
    };
  },
};
</script>

<style lang="css">
.body{
    display: flex;
    flex-direction: column;
}
.title{
    font-size: 1.5rem;
    color: brown;
    text-transform: capitalize;
}

.info{
    font-size: 0.75rem;
}

.button {
    border-radius: 8px;
    border: 1px solid brown;
    display: inline-block;
    padding: 0.5rem;
    cursor: pointer;
    margin-top: 3rem;
    
}
</style>
