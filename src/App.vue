<template>
  <div id="app">
    <vue-header />
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import VueHeader from "./components/VueHeader";

export default {
  name: "app",
  components: {
    VueHeader
  }
};
</script>

<style>
#app {
  margin: 0 auto;
  padding: 0;
}
</style>
