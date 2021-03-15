<template>
  <div>
    <Navbar />
    <UploadCard />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import UploadCard from "@/components/UploadCard.vue";
export default {
  name: "Upload",
  components: {
    Navbar,
    UploadCard
  }
};
</script>
