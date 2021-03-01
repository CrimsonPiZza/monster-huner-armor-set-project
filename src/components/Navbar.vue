<template>
  <mdb-navbar color="elegant-color sticky-top" dark>
    <mdb-navbar-brand href="home" class="font-weight-bold">
      MH - Fashion Set
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href=""><mdb-icon icon="fire-alt" /> New</mdb-nav-item>
        <mdb-nav-item href=""
          ><mdb-icon icon="grin-hearts" /> Top Picks</mdb-nav-item
        >
        <mdb-dropdown tag="li" class="nav-item">
          <mdb-dropdown-toggle
            v-if="isUserAuth"
            tag="a"
            navLink
            color="success-color-dark"
            slot="toggle"
            waves-fixed
            ><mdb-icon icon="user" /> {{ getUser.displayName }}
          </mdb-dropdown-toggle>
          <mdb-dropdown-menu>
            <mdb-dropdown-item
              ><mdb-icon icon="heart" /> My Favorite</mdb-dropdown-item
            >
            <mdb-dropdown-item @click="check"
              ><mdb-icon icon="key" /> Change Password</mdb-dropdown-item
            >
            <mdb-dropdown-item @click="signOut">
              <mdb-icon icon="sign-out-alt" /> Sign Out
            </mdb-dropdown-item>
          </mdb-dropdown-menu>
        </mdb-dropdown>
      </mdb-navbar-nav>
      <form>
        <mdb-input
          type="text"
          class="text-white"
          placeholder="Search"
          aria-label="Search"
          label
          navInput
          waves
          waves-fixed
        />
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbIcon,
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem,
} from "mdbvue";
import { mapGetters, mapActions } from "vuex";
//import firebase from 'firebase/app';
export default {
  name: "Navbar",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbInput,
    mdbIcon,
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"]),
  },
  methods: {
    ...mapActions(["signOutAction"]),
    goToSignIn() {
      this.$router.push({ path: "/signin" });
    },
    signOut() {
      this.signOutAction();
      this.goToSignIn();
    },
    check() {
      console.log(this.isUserAuth);
      this.getUser.getIdToken(false).then((idToken) => {
        console.log(idToken);
      });
    },
  },
  created() {},
};
</script>