<template>
  <nav class="d-flex justify-content-center mb-5">
    <ul class="pagination pg-dark">
      <li class="page-item" :class="!this.prev ? 'disabled' : ''">
        <a class="page-link" aria-label="Previous" @click="goToPrevious">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-if="this.prev"><a class="page-link" @click="goToPrevious">{{this.prev}}</a></li>
      <li class="page-item active"><a class="page-link">{{this.current}}</a></li>
      <li class="page-item" v-if="this.next"><a class="page-link" @click="goToNext">{{this.next}}</a></li>
      <li class="page-item" :class="!this.next ? 'disabled' : ''">
        <a class="page-link" aria-label="Next" @click="goToNext">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// import { mdbPagination, mdbPageItem, mdbPageNav } from "mdbvue";
export default {
  name: "pagination",
  props: {
    prev: {type : Number},
    current: {type : String},
    next: {type : Number},
  },
  //   components: {
  //     mdbPagination,
  //     mdbPageItem,
  //     mdbPageNav,
  //   },
  methods: {
    goToPrevious() {
      this.$router.push({ path: '/', query: {page: this.prev} });
    },
    goToNext() {
      this.$router.push({ path: '/', query: {page: this.next} });
    },
  },
};
</script>
