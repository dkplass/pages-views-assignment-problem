<template>
  <div class="container">This is product:{{ $route.params.pid }}</div>
</template>

<script>
export default {
  meta: {
    theme: "orange",
  },
  data() {
    return {
      test: "dasf",
    };
  },
  created() {
    console.log(this.$route.params);
    console.log(this.$route.params.pid);
    console.log(this.$nuxt._route.params);
    console.log(this.$nuxt._route.params.pid);
    console.log(this.$nuxt.$options.context.route.meta);
  },
  methods: {
    linkHandler() {
      this.$router.push("/products/" + "click");
    },
  },
};
</script>
