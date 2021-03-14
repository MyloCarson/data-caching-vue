<template>
  <div>
    <template v-if="!data && !error">
      <p class="info">Fetching data, kindly drink a beer while waiting...</p>
    </template>
    <template v-if="error">
      <p class="danger">API don get accident abeg free me</p>
    </template>
    <div>Validating -> {{ isValidating }}</div>
    <template v-if="data">
      
      <div class="grid">
        <GridItem
          v-for="post in data"
          :key="post.id"
          :id="post.id"
          :title="post.title"
          :userId="post.userId"
          :body="post.body"
        />
      </div>
    </template>
  </div>
</template>

<script>
import GridItem from "./GridItem";
import useSWRV from "swrv";

export default {
  setup() {
    const { data, error, isValidating, mutate } = useSWRV(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return {
      data,
      error,
      isValidating,
      mutate,
    };
  },
  components: {
    GridItem,
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 1rem;
}

.danger {
  font-size: 3rem;
  color: red;
}

.info {
  font-size: 2rem;
  color: skyblue;
}
</style>
