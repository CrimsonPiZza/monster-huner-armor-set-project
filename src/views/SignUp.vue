<template>
    <div>
        <div class="bg" :style="{backgroundImage:'url(' + require('@/assets/images/background.jpg') + ')'}">
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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
</style>