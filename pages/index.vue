<template>
  <section class="container">
    <ol>
      <li>Create two routes: /products and /products/:pid</li>
      <li>
        Add a button to the main page. The button should navigate
        (programmatically) to /products
      </li>
      <li>
        Add two links to the /products page. The links should go to /products/1
        and /products/2
      </li>
      <li>Output the product id on the /products/:pid page</li>
    </ol>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
};
</script>

<style>
</style>
