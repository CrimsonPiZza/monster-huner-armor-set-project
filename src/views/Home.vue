<template>
  <div>
    <Navbar/>
    <div class="container mt-3">
      <div class="d-flex justify-content-center align-items-center mb-3">
        <div class="mr-auto pl-2">
          <h3 class="white-text font-weight-bold"><mdb-icon icon="fire-alt" /> New </h3>
        </div>
        <div class="pr-2">
          <mdb-btn color="elegant-color" class="white-text" rounded @click="toggleUploadForm">
            Upload
            <mdb-icon icon="cloud-upload-alt" />
          </mdb-btn>
        </div>
      </div>
        
      <mdb-row>
        <mdb-col md="6" lg="6" class="pb-5" v-for="item in items" :key="item.id">
          <Fashion-Card 
          :title="item.title" 
          :image="item.image" 
          :helm="item.helm" 
          :mail="item.mail" 
          :arms="item.arms" 
          :waist="item.waist" 
          :greaves="item.greaves" 
          :author="item.author" 
          :date="item.date"
          :favorite="item.favorite"
          />
        </mdb-col>
      </mdb-row>

      <UploadForm/>
      
    </div> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FashionCard from '@/components/FashionCard.vue'
import UploadForm from '@/components/UploadForm.vue'
import {mdbRow, mdbCol, mdbIcon, mdbBtn} from 'mdbvue'
export default {
  name: 'Home',
  components: {
    Navbar,
    FashionCard,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    UploadForm
  },
  data() {
    return {
      items: [
        {
          id : "1",
          title : "Ex Baron Set - Winter Edition",
          image : "https://i.ibb.co/3MNqtqX/Dr12aio-Vs-AATR-T.jpg",
          helm : "Snowbaron Helm",
          mail : "Snowbaron Mail",
          arms : "Snowbaron Vambraces",
          waist : "Snowbaron Faulds",
          greaves : "Snowbaron Greave",
          author : "Kyle Hemsworth",
          date : "12/02/2021",
          favorite : true
        },
        {
          id : "2",
          title : "Gore Magala Set",
          image : "https://i.ibb.co/bQFKFqq/Dv7y-Xk-ZUc-AAi-Fwt.jpg",
          helm : "Gore Cap",
          mail : "Gore Vest",
          arms : "Gore Guard",
          waist : "Gore Coat",
          greaves : "Gore Leggings",
          author : "Kyle Hemsworth",
          date : "12/02/2021",
          favorite : false
        },
        {
          id : "3",
          title : "Gore Magala Set",
          image : "https://i.ibb.co/bQFKFqq/Dv7y-Xk-ZUc-AAi-Fwt.jpg",
          helm : "Gore Cap",
          mail : "Gore Vest",
          arms : "Gore Guard",
          waist : "Gore Coat",
          greaves : "Gore Leggings",
          author : "Kyle Hemsworth",
          date : "12/02/2021",
          favorite : false
        },
        {
          id : "4",
          title : "Gore Magala Set",
          image : "https://i.ibb.co/bQFKFqq/Dv7y-Xk-ZUc-AAi-Fwt.jpg",
          helm : "Gore Cap",
          mail : "Gore Vest",
          arms : "Gore Guard",
          waist : "Gore Coat",
          greaves : "Gore Leggings",
          author : "Kyle Hemsworth",
          date : "12/02/2021",
          favorite : false
        }
      ]
    }
  },
  methods : {
    toggleUploadForm(){
      this.$store.dispatch("toggleUploadForm")
    }
  }
}
</script>

