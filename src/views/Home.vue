<template>
  <div>
    <Navbar/>
    <div class="container mt-5">
      <div class="row">
        <Fashion-Card/>
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
  }
}
</script>
