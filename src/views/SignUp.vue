<template>
    <div>
        <div class="bg">
            <div class="rgba">
                <div style="height:100vh" class="d-flex justify-content-center align-items-center">
                    <SignUp-Card/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignUpCard from '@/components/SignUpCard.vue'
export default {
    name : "SignUp",
    components : {
        SignUpCard
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