<template>
  <div class="scan">
    <h1>{{ msg }}</h1>
     <picture-input 
      ref="pictureInput"
      width="600" 
      height="600" 
      margin="16" 
      accept="image/jpeg,image/png" 
      size="10" 
      />
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";

export default {
  name: "ScanBarcode",
  props: {
    msg: String
  },
  components: {
    PictureInput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
