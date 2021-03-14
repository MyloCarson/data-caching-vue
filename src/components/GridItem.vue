<template>
  <div class="grid-item">
    <h3 class="grid-item__title">{{ title }}</h3>
    <router-link class="grid-item__link" :to="`/post/${id}`">Click me</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    userId: Number,
    id: Number,
  },
};
</script>

<style scoped>
.grid-item {
  display: flex;
  border: 2px solid grey;
  border-radius: 8px;
  padding: 0.5rem;
  flex-direction: column;
  place-items: center;
}

.grid-item__title{
    text-transform: uppercase;
    font-size: 0.55rem;
    text-decoration: underline;
    text-align: left;
}

.grid-item__link{
    text-decoration: underline;
    color: green;
    font-size: 0.74rem;
}
</style>
