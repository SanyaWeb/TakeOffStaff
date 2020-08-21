<template>
  <div id="app">
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout/MainLayout"

export default {
  computed: {
    layout() {
      return this.$route.meta.layout;
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: Arial;
}
#app {
  background: #e3c9b0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
