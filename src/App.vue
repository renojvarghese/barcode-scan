<template>
  <div id="app">
    <ScanBarcode />
  </div>
</template>

<script>
import ScanBarcode from "./components/ScanBarcode.vue";

export default {
  name: "app",
  components: {
    ScanBarcode
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 786px;
  margin: 0 auto;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.05);
}
</style>
