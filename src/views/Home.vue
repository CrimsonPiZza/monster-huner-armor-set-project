<template>
  <div>
    <Navbar/>
    <div class="container mt-5">
      <div class="row" v-for="item in items" :key="item">
        <Fashion-Card :title="item.title" :helm="item.helm" :mail="item.mail" :arms="item.arms" :waist="item.waist" :greaves="item.greaves" :author="item.author" :date="item.date"/>
      </div>
    </div> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FashionCard from '@/components/FashionCard.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    FashionCard
  },
  data() {
    return {
      items: [
        {
          title : "Ex Baron Set - Winter Edition",
          helm : "Snowbaron Helm",
          mail : "Snowbaron Mail",
          arms : "Snowbaron Vambraces",
          waist : "Snowbaron Faulds",
          greaves : "Snowbaron Greave",
          author : "Kyle Hemsworth",
          date : "12/02/2021"
        }
      ]
    }
  }
}
</script>
