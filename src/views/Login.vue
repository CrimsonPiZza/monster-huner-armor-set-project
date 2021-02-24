<template>
    <div>
        <div class="bg">
            <div class="rgba">
                <div style="height:100vh" class="d-flex justify-content-center align-items-center">
                    <login-card/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginCard from '@/components/LoginCard.vue'
export default {
    name : "Login",
    components : {
        LoginCard
    }
}
</script>

<style scoped>
  .bg {
    background-image: url('https://i.redd.it/xrksve2jv0921.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
</style>