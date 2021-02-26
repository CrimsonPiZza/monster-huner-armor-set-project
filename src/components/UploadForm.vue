<template>
  <mdb-container>
    <!-- cart modal -->
    <mdb-modal
      size="lg"
      centered
      :show="this.$store.getters.getUploadForm"
      @close="toggleUploadForm"
      class="text-center white-text"
    >
      <mdb-modal-header class="elegant-color">
        <h4 class="modal-title" id="myModalLabel">Upload your armor set</h4>
      </mdb-modal-header>
      <mdb-modal-body class="elegant-color-dark">
        <mdb-row>
          <mdb-col sm="12" md="8" lg="8">
            <img
              src="https://trirama.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
              class="img-fluid"
              alt="Responsive image"
            />
            <form class="md-form mt-0">
              <div class="file-field">
                <div
                  class="btn float-none btn-rounded purple-gradient btn-sm waves-effect waves-light mt-3"
                >
                  <span>Choose file</span>
                </div>
              </div>
            </form>
          </mdb-col>
          <mdb-col>
            <div>
              <mdb-input label="Title" size="lg" class="mt-0" />
              <hr />
              <mdb-input label="Helm" size="sm" />
              <mdb-input label="Mail" size="sm" />
              <mdb-input label="Arms" size="sm" />
              <mdb-input label="Waist" size="sm" />
              <mdb-input label="Greaves" size="sm" />
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-modal-body>
      <mdb-modal-footer >
        <mdb-btn size="sm" rounded color="white" @click="toggleUploadForm"
          >Upload <mdb-icon icon="paper-plane"
        /></mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
import {
  mdbInput,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbContainer,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalBody,
  mdbModalFooter,
} from "mdbvue";
export default {
  name: "UploadForm",
  components: {
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalBody,
    mdbModalFooter,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbInput,
  },
  props: {},
  methods: {
    toggleUploadForm() {
      this.$store.dispatch("toggleUploadForm");
    },
    getFileInputValue(val) {
      console.log(val);
    },
  },
};
</script>