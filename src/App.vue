<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}

body > div {
  height: 100%;
  -webkit-overflow-scrolling: touch;
}
</style>
