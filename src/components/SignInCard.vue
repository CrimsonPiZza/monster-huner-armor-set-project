<template>
  <div class="container-fluid">
    <notifications group="alert" position="bottom right" />
    <section class="form-dark">
      <mdb-row>
        <mdb-col
          class="offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-4 col-lg-4 d-flex justify-content-center align-items-center"
        >
          <mdb-card
            class="card-image animated flip bg-dark"
            :style="{ width: '22rem' }"
          >
            <div class="z-depth-4">
              <mdb-card-body class="mx-4 text-white">
                <mdb-avatar class="mx-auto">
                  <img
                    src="@/assets/logo.png"
                    class="img-fluid w-50 h-50 mx-auto d-block"
                  />
                  <div class="text-center">
                    <h3 class="mb-5">
                      <strong>Monster Hunter Armor Set</strong>
                    </h3>
                  </div>
                </mdb-avatar>
                <mdb-input label="Email" type="email" v-model="email" />
                <mdb-input
                  label="Password"
                  type="password"
                  containerClass="mb-0"
                  v-model="password"
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
                    >Login</mdb-btn
                  >
                </div>
              </mdb-card-body>
              <mdb-modal-footer class="mx-5 pt-3 mb-1">
                <p class="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <router-link to="/signup" class="blue-text ml-1"
                    >Sign Up</router-link
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
  mdbAvatar,
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
  name: "SignInCard",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbModalFooter,
    mdbAvatar,
  },
  data() {
    return {
      email: null,
      password: null,
      validationErrors: [],
    };
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth", "getError"]),
  },
  methods: {
    ...mapActions(["signInAction"]),
    goToHome() {
      this.$router.push({ path: "/" });
    },
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
      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.signIn();
      } else {
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
    async signIn() {
      console.log("Tryna log in");
      // @TODO signIn logic will come here
      await this.signInAction({ email: this.email, password: this.password });
      if (this.isUserAuth) {
        // Sign in successfully!
        this.$notify({
          group: "alert",
          type: "success",
          title: "Sign In Success",
          text: "You will be redirected to the homepage!",
        });
        this.$router.push({ path: "/" });
      } else {
        // Sign in unsucessfully
        this.$notify({
          group: "alert",
          type: "error",
          title: "Failed to sign in",
          text: this.getError,
        });
      }
    },
  },
};
</script>