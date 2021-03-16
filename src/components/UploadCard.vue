<template>
  <div class="container mt-3">
    <mdb-row>
      <mdb-col
        md="6"
        lg="6"
        class="pb-5 d-flex align-items-stretch offset-md-3 offset-lg-3"
      >
        <mdb-card class="rgba-black-strong text-white">
          <mdb-view hover>
            <a>
              <mdb-card-image
                :src="image"
                class="img-fluid cardImage"
                alt="Armor set"
              ></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-btn tag="a" @click="selectImageToUpload" floating action class="ml-auto mr-4" color="elegant">
            <input id="imageInput" @change="imagePicked" type="file" accept=".jpg, .png, .jpeg, .gif" hidden>
            <mdb-icon icon="camera" />
          </mdb-btn>
          <mdb-card-body class="pt-0">
            <mdb-card-title class="text-white font-weight-bold">
              <mdb-input
                v-model="armorTitle"
                label="Armor Title"
                class="w-75"
                size="md"
              />
            </mdb-card-title>
            <div>
              <mdb-badge v-if="isFemale" @click.native="toggleGender" pill class="badge-secondary"
                ><mdb-icon icon="edit" /> Female</mdb-badge
              >
              <mdb-badge v-else pill @click.native="toggleGender" class="badge-Primary"><mdb-icon icon="edit" /> Male</mdb-badge>
              <mdb-badge v-if="isBladeMaster" @click.native="toggleType" pill class="badge-danger ml-2"
                ><mdb-icon icon="edit" /> BladeMaster</mdb-badge
              >
              <mdb-badge v-else @click.native="toggleType" pill class="badge-warning ml-2"
                ><mdb-icon icon="edit" /> Gunner</mdb-badge
              >
            </div>
            <hr />
            <p class="font-small grey-dark-text mb-0">
              <span class="font-weight-bold">
                <mdb-input v-model="armorHelm" label="Helm" size="sm" class="w-50" />
              </span>
            </p>
            <p class="font-small grey-dark-text mb-0">
              <span class="font-weight-bold">
                <mdb-input v-model="armorMail" label="Mail" size="sm" class="w-50" />
              </span>
            </p>
            <p class="font-small grey-dark-text mb-0">
              <span class="font-weight-bold">
                <mdb-input v-model="armorArms" label="Arms" size="sm" class="w-50" />
              </span>
            </p>
            <p class="font-small grey-dark-text mb-0">
              <span class="font-weight-bold">
                <mdb-input v-model="armorWaist" label="Waist" size="sm" class="w-50" />
              </span>
            </p>
            <p class="font-small grey-dark-text mb-0">
              <span class="font-weight-bold">
                <mdb-input v-model="armorGreaves" label="Greaves" size="sm" class="w-50" />
              </span>
            </p>
          </mdb-card-body>
          <mdb-card-footer
            color="elegant-color"
            class="lighten-3 p-0 text-right"
          >
            <mdb-btn @click="logSth" size="sm" class="m-2" color="white">Upload <mdb-icon icon="cloud-upload-alt" /></mdb-btn>
          </mdb-card-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardFooter,
  mdbBtn,
  mdbInput,
  mdbView,
  mdbMask,
  mdbIcon,
  mdbBadge,
} from "mdbvue";
export default {
  name: "UploadCard",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbBadge,
    mdbInput,
  },
  data() {
    return {
      image : "https://content.hostgator.com/img/weebly_image_sample.png",
      armorTitle: "",
      armorHelm: "",
      armorMail: "",
      armorArms: "",
      armorWaist: "",
      armorGreaves: "",
      isFemale: true,
      isBladeMaster: true,
    };
  },
  methods: {
    logSth() {
      console.log("Armor Title:", this.armorTitle)
      console.log("Armor Helms:", this.armorHelm)
      console.log("Armor Mail:", this.armorMail)
      console.log("Armor Arms:", this.armorArms)
      console.log("Armor Waist:", this.armorWaist)
      console.log("Armor Greaves:", this.armorTitle)
      console.log("isFemale:", this.isFemale)
      console.log("isBladeMaster:", this.isBladeMaster)
    },
    toggleGender(){
        this.isFemale = !this.isFemale
    },
    toggleType(){
        this.isBladeMaster = !this.isBladeMaster
    },
    selectImageToUpload(){
      document.getElementById("imageInput").click()
    },
    imagePicked(event){
      if (event.target.files && event.target.files[0]){
        var FR = new FileReader();

        FR.addEventListener("load", (e) => {
          this.image = e.target.result
        })

        FR.readAsDataURL( event.target.files[0] )
      }
    }
  },
};
</script>

<style scoped>
.cardImage{
  max-height:400px; 
  min-height:300px;
  width:auto;
  background-repeat: no-repeat;
  background-size: cover ;
  background-position: center center;
  object-fit: cover;
}
</style>
