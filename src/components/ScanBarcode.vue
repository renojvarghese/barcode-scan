<template>
  <div class="scan">
    <div class="pict-btn">
     <picture-input 
      ref="pictureInput"
      accept="image/jpeg,image/png" 
      width="450"
      height="320"
      :plain="true"
      />
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";

export default {
  name: "ScanBarcode",
  components: {
    PictureInput
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scan {
  min-height:110vh;
}
.pict-btn {
  margin:0 auto;
  max-width: 450px;
  max-height: 320px;
  position:relative;
  &:before {
    content: "";
    width:100%;
    height:100%;
    background: url("../assets/camera-icon.svg") no-repeat center center green;
    position:absolute;
    top:0;
    left:0;

  }
}
</style>
