<template>
  <div id="app">
    <ScanBarcode msg="This·is·your·Scan·Barcode" />
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
