<template>
  <div class="scan">
    <div class="pict-btn" v-bind:class="{ hasImage: image}">
     <picture-input 
      ref="pictureInput"
      accept="image/jpeg,image/png" 
      width="450"
      height="320"
      :plain="true"
      :crop="false"
      :hideChangeButton="true"
      @change="onChange"
      />
    </div>
    <div v-if="error" class="error">
      {{error}}
    </div>
    <div v-if="barcode" class="barcode">
      {{barcode}}
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import Quagga from "quagga";
import Vue from "vue";
export default {
  name: "ScanBarcode",
  data: () => ({
    barcode: null,
    image: null,
    error: null
  }),
  components: {
    PictureInput
  },
  methods: {
    onChange: function(image) {
      this.image = image;
      let quaggaConfig = {
        inputStream: {
          size: 1000,
          singleChannel: false
        },
        locator: {
          patchSize: "large",
          halfSample: false
        },
        decoder: {
          readers: [
              "upc_reader",
              "code_128_reader",
              "code_39_reader",
              "code_39_vin_reader",
              "ean_8_reader",
              "ean_reader",
              "upc_e_reader",
              "codabar_reader"
          ]
        },
        locate: true,
        src: image
      }
      Quagga.decodeSingle(quaggaConfig, result => {
        if (result.codeResult) {
          this.barcode = result.codeResult.code
          this.error = null;
        }
        else {
          this.barcode = null;
          this.error = "barcode not found";
        }
      })
    }
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
  &:before, &:after{
    content: "";
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:10003;
    pointer-events: none;
  }
  &:before {
    background: url("../assets/camera-icon.svg") no-repeat center center green;
  }
  &:after {
    z-index: 10002;
    background: black;
    opacity:0;
  }
  &.hasImage {
    &:before {
      background: url("../assets/camera-icon.svg") no-repeat center center;
    }
    &:after {
      opacity: .25;;
    }
  }
}
</style>
