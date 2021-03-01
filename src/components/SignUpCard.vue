<template>
  <div class="container-fluid">
    <notifications group="alert" position="bottom right" />
    <section class="form-dark">
      <mdb-row>
        <mdb-col
          class="offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4 d-flex justify-content-center align-items-center"
        >
          <mdb-card class="card-image animated flip bg-dark">
            <div class="z-depth-4">
              <mdb-card-body class="mx-4 text-white">
                <mdb-avatar class="mx-auto">
                  <img
                    src="@/assets/logo.png"
                    class="img-fluid w-50 h-50 mx-auto d-block"
                  />
                  <div class="text-center">
                    <h3 class="mb-5"><strong>Sign Up</strong></h3>
                  </div>
                </mdb-avatar>
                <mdb-input v-model="displayName" label="Username" type="text" />
                <mdb-input v-model="email" label="Email" type="email" />
                <mdb-input
                  v-model="password"
                  label="Password"
                  type="password"
                  containerClass="mb-0"
                />
                <mdb-input
                  v-model="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  containerClass="mb-0"
                />
                <p class="font-small blue-text d-flex justify-content-end pb-3">
                  <a class="white-text ml-1"> Amazing sets are waiting!</a>
                </p>
                <div class="text-center mb-3">
                  <mdb-btn
                    @click="validate"
                    type="button"
                    gradient="peach"
                    class="btn-block z-depth-1a"
                    >Sign Up</mdb-btn
                  >
                </div>
              </mdb-card-body>
              <mdb-modal-footer class="mx-5 pt-3 mb-1">
                <p class="font-small grey-text d-flex justify-content-end">
                  Already a member?
                  <router-link to="/signin" class="blue-text ml-1"
                    >Login</router-link
                  >
                </p>
              </mdb-modal-footer>
            </div>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </div>
</template>

<script>
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbBtn,
  mdbModalFooter,
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SignUpCard",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbModalFooter,
  },
  data() {
    return {
      displayName: "Kyle Hemsworth",
      email: "kyleuk1003@gmail.com",
      password: "rebelliondante",
      confirmPassword: "rebelliondante",
      validationErrors: [],
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth", "getError"]),
  },
  methods: {
    ...mapActions(["signUpAction"]),
    resetError() {
      this.validationErrors = [];
    },
    validate() {
      // Clear the errors before we validate again
      this.resetError();
      // email validation
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
      }
      if (/.+@.+/.test(this.email) != true) {
        this.validationErrors.push("<strong>E-mail</strong> must be valid.");
      }
      // password validation
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty");
      }
      if (/.{6,}/.test(this.password) != true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 6 characters long"
        );
      }
      if (!(this.password === this.confirmPassword)) {
        this.validationErrors.push("<strong>Passwords</strong> did not match");
      }
      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.signUp();
      }else{
        // invalid form
        this.validationErrors.forEach((error) => {
          this.$notify({
            group: "alert",
            type: "error",
            title: "Invalid Input",
            text: error,
          });
        });
      }
    },
    async signUp() {
      console.log("Tryna sign up");

      // @TODO sign up logic will come here
      await this.signUpAction({
        email: this.email,
        password: this.password,
        displayName: this.displayName,
      });
      if (this.isUserAuth) {
        // Sign up successfully!
        this.$notify({
          group: "alert",
          type: "success",
          title: "Sign Up Success",
          text: "You will be redirected to the homepage!",
        });
        this.$router.push({ path: "/" });
      } else {
        // Sign up unsucessfully
        this.$notify({
          group: "alert",
          type: "error",
          title: "Failed to sign up",
          text: this.getError,
        });
      }
    },
  },
};
</script>