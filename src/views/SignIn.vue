<template>
  <div>
    <div
      class="bg"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/background.jpg') + ')',
      }"
    >
      <div class="rgba">
        <div
          style="height: 100vh"
          class="d-flex justify-content-center align-items-center"
        >
          <SignIn-Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignInCard from "@/components/SignInCard.vue";
export default {
  name: "Login",
  components: {
    SignInCard,
  },
};
</script>

<style scoped>
.bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>