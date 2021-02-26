<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["authAction"]),
  },
  mounted() {
    this.authAction();
  },
};
</script>

<style>
@import "./assets/css/custom_stylesheet.css";
</style>
