<template>
  <mdb-card class="rgba-black-strong">
    <mdb-view :style="{height:'42vh'}" class="elegant-color-dark">

    </mdb-view>
    <mdb-card-body class="mt-2 mr-5 animate-loading">
      <div class="grey darken-3 rounded d-block" :style="{width:'28vw',height:'20px'}"></div>
      <hr />
      <div class="grey darken-3 rounded d-block mb-3" :style="{width:'16vw',height:'15px'}"></div>
      <div class="grey darken-3 rounded d-block mb-3" :style="{width:'15vw',height:'15px'}"></div>
      <div class="grey darken-3 rounded d-block mb-3" :style="{width:'14vw',height:'15px'}"></div>
      <div class="grey darken-3 rounded d-block mb-3" :style="{width:'13vw',height:'15px'}"></div>
      <div class="grey darken-3 rounded d-block mb-3" :style="{width:'12vw',height:'15px'}"></div>
    </mdb-card-body>
    <mdb-card-footer class="elegant-color p-0 text-center">
      <ul class="list-unstyled list-inline font-small mt-3 animate-loading">
        <li class="list-inline-item pr-2 white-text">
          <div class="grey darken-3 rounded d-block" :style="{width:'8vw',height:'15px'}"></div>
        </li>
        <li class="list-inline-item pr-2 white-text">
          <div class="grey darken-3 rounded d-block" :style="{width:'8vw',height:'15px'}"></div>
        </li>
      </ul>
    </mdb-card-footer>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardBody,
  mdbCardFooter,
  mdbView,
} from "mdbvue";
export default {
  name: "FashionCardSkeletion",
  props: {
  },
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardFooter,
    mdbView
  }
};
</script>
<style scoped>
.animate-loading{
  animation: loading 5s infinite; 
}
@keyframes loading { 
    0% { 
        opacity: 1; 
    }
    25% { 
        opacity: 0.5; 
    }
    50% { 
      opacity: 1; 
    }
    75% { 
      opacity: 0.5; 
    }
    100% {
      opacity: 1;
    }
} 
</style>