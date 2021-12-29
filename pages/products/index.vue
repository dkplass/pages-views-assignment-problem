<template>
  <div class="container">
    <div class="card-deck">
      <div class="card">
        <nuxt-link to="/products/1">Go to Product 1</nuxt-link>
      </div>
      <div class="card">
        <nuxt-link to="/products/2">Go to Product 2</nuxt-link>
      </div>
      <div class="card">
        <button class="button--grey" @click="linkHandler">
          Go to Product Button
        </button>
        <nuxt-link :to="{ name: 'products-pid', params: { pid: '123' } }">
          Go to Product Nuxt Link
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linkHandler() {
      this.$router.push("/products/" + "click");
    },
  },
};
</script>

<style scoped>
.card-deck {
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 100%;
}
.card {
  width: 25%;
  height: 100px;
  margin: 0.2rem;
  display: flex;
  flex-direction: column;
}
</style>