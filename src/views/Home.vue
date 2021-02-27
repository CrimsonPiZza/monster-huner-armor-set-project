<template>
  <div>
    <Navbar />
    <div class="container mt-3">
      <div class="d-flex justify-content-center align-items-center mb-3">
        <div class="mr-auto pl-2">
          <h3 class="white-text font-weight-bold">
            <mdb-icon icon="fire-alt" /> New
          </h3>
        </div>
        <div class="pr-2">
          <mdb-btn
            color=""
            class="white-text elegant-color"
            rounded
            @click="toggleUploadForm"
          >
            Upload
            <mdb-icon icon="cloud-upload-alt" />
          </mdb-btn>
        </div>
      </div>

      <mdb-row v-if="items.length > 0">
        <mdb-col
          md="6"
          lg="6"
          class="pb-5"
          v-for="item in items"
          :key="item.id"
        >
          <Fashion-Card
            :title="item.title"
            :image="item.image"
            :helm="item.helm"
            :mail="item.mail"
            :arms="item.arms"
            :waist="item.waist"
            :greaves="item.greaves"
            :author="item.author"
            :date="item.date"
            :favorite="item.favorite"
          />
        </mdb-col>
      </mdb-row>
      <mdb-row v-else>
        <mdb-col
          md="6"
          lg="6"
          class="pb-5"
          v-for="id in skeletions"
          :key="id"
        >
          <Fashion-Card-Skeletion/>
        </mdb-col>
      </mdb-row>

      <UploadForm />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FashionCard from "@/components/FashionCard.vue";
import FashionCardSkeletion from "@/components/FashionCardSkeletion.vue"
import UploadForm from "@/components/UploadForm.vue";
import { mdbRow, mdbCol, mdbIcon, mdbBtn } from "mdbvue";
export default {
  name: "Home",
  components: {
    Navbar,
    FashionCard,
    FashionCardSkeletion,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    UploadForm,
  },
  data() {
    return {
      skeletions : [
        1,
        2,
        3,
        4,
        5,
        6
      ],
      items: [
      ],
    };
  },
  methods: {
    toggleUploadForm() {
      this.$store.dispatch("toggleUploadForm");
    },
  },
};
</script>

