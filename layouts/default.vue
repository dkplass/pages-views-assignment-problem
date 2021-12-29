<template>
  <div class="content">
    <div class="nav">
      <button class="button--green" @click="linkHandler">Product</button>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    linkHandler() {
      this.$router.push("/products");
    },
  },
};
</script>
