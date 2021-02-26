<template>
  <mdb-card class="bg-dark text-light">
    <mdb-view hover>
      <a>
        <mdb-card-image :src="image" alt="Card image cap"></mdb-card-image>
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
      </a>
    </mdb-view>
    <mdb-btn
      tag="a"
      v-on:click="toggleFavorite"
      floating
      action
      class="ml-auto mr-4"
      color="elegant"
    >
      <mdb-icon v-if="favorite" icon="heart" />
      <mdb-icon v-else far icon="heart" />
    </mdb-btn>
    <mdb-card-body class="mt-2">
      <mdb-card-title class="text-white font-weight-bold">{{
        title
      }}</mdb-card-title>
      <hr />
      <p class="font-small grey-dark-text mb-0">
        <span class="font-weight-bold">Helm : </span> {{ helm }}
      </p>
      <p class="font-small grey-dark-text mb-0">
        <span class="font-weight-bold">Mail : </span> {{ mail }}
      </p>
      <p class="font-small grey-dark-text mb-0">
        <span class="font-weight-bold">Arms : </span> {{ arms }}
      </p>
      <p class="font-small grey-dark-text mb-0">
        <span class="font-weight-bold">Waist : </span> {{ waist }}
      </p>
      <p class="font-small grey-dark-text mb-0">
        <span class="font-weight-bold">Greaves : </span> {{ greaves }}
      </p>
    </mdb-card-body>
    <mdb-card-footer color="elegant-color" class="lighten-3 p-0 text-center">
      <ul class="list-unstyled list-inline font-small mt-3">
        <li class="list-inline-item pr-2 white-text">
          <mdb-icon icon="user-astronaut" class="pr-1" /> {{ author }}
        </li>
        <li class="list-inline-item pr-2 white-text">
          <mdb-icon far icon="clock" class="pr-1" /> {{ date }}
        </li>
      </ul>
    </mdb-card-footer>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardFooter,
  mdbBtn,
  mdbView,
  mdbMask,
  mdbIcon,
} from "mdbvue";
export default {
  name: "FashionCard",
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    helm: {
      type: String,
    },
    mail: {
      type: String,
    },
    arms: {
      type: String,
    },
    waist: {
      type: String,
    },
    greaves: {
      type: String,
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    favorite: {
      type: Boolean,
    },
  },
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardFooter,
    mdbBtn,
    mdbView,
    mdbMask,
    mdbIcon,
  },
  methods: {
    toggleFavorite(event) {
      if (this.isFavorite) {
        event.target.querySelector("i").className =
          "animated bounceIn far fa-heart text-";
        event.target.querySelector("i").className = "far fa-heart text-";
      } else {
        event.target.querySelector("i").className =
          "animated bounceIn fas fa-heart text-";
      }
      this.isFavorite = !this.isFavorite;
    },
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  created() {
    this.isFavorite = this.favorite;
  },
};
</script>
