<template>
  <div class="scan">
    <h3>Scan barcode from image</h3>
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
    <div v-if="barcode" class="barcode-container">
      <div class="barcode">{{barcode}}</div>
    </div>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import Quagga from "quagga";

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
$green: #23D16F;
$red: #E81300;
.scan {
  min-height:80vh;
  padding:15pt;
  padding-top:20vh;
  padding-bottom: 0;
}
h3 {
  margin:0;
  font-size: 12pt;
  font-weight: 400;
  font-style: italic;
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
    background: url("../assets/camera-icon.svg") no-repeat center center;
    background-size: 100% 100%;
    width: 80%;
    height: 80%;
    top:10%;
    left: 10%;
  }
  &:after {
    z-index: 10002;
    background: $green;
    opacity:1;
  }
  &.hasImage {
    &:before {
      background: url("../assets/camera-icon.svg") no-repeat cover center center;
      opacity: .85;
    }
    &:after {
      background: black;
      opacity: .25;
    }
  }
}
.error {
  color:$red;
  font-size: 16pt;
  font-weight: 400;
  font-style: italic;
  overflow-wrap: break-word;
  margin-top: 20px;
}
.barcode-container {
  text-align: left;
  margin: 0 auto;
  max-width: 450px;
  margin-top:20px;
  overflow-wrap: break-word;
}
.barcode-title {
  font-size: 24pt;
}
.barcode {
  color:$green;
  font-size: 24pt;
  letter-spacing: 4pt;
  text-align: center;
}
</style>
