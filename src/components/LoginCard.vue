<template>
    <div class="container-fluid">
      <section class="form-dark">
        <mdb-row>
          <mdb-col class="offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4 d-flex justify-content-center align-items-center">
            <mdb-card class="card-image animated zoomInRight bg-dark" :style="{'width':'22rem'}">
              <div class="z-depth-4">
                <mdb-card-body class="mx-4 text-white">
                  <mdb-avatar class="mx-auto"> 
                    <img src="@/assets/logo.png" class="img-fluid w-50 h-50 mx-auto d-block"/>
                    <div class="text-center">
                      <h3 class="mb-5"><strong>Monster Hunter Armor Set</strong></h3>
                    </div>
                  </mdb-avatar>
                  <mdb-input label="Email" type="email"/>
                  <mdb-input label="Password" type="password" containerClass="mb-0"/>
                  <p class="font-small blue-text d-flex justify-content-end pb-3"><a class="white-text ml-1"> Amazing sets are waiting!</a></p>
                  <div class="text-center mb-3">
                    <mdb-btn @click="goToHome" type="button" gradient="peach" class="btn-block z-depth-1a">Login</mdb-btn>
                  </div>
                </mdb-card-body>
                <mdb-modal-footer class="mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">Not a member? <router-link to="/signup" class="blue-text ml-1">Sign Up</router-link></p>
                </mdb-modal-footer>
              </div>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </div>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbModalFooter } from 'mdbvue';
export default {
    name : "LoginCard",
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbModalFooter
    },
    methods: {
      goToHome(){
          this.$router.push({path:"/home"})
      }
    }
}
</script>