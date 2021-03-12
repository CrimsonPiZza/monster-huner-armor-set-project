<template>
  <div>
    <mdb-modal :show="modal" @close="modal = false" class="text-center white-text d-flex justify-content-center align-items-center" size="xl">
        <img :src="this.getImageModal.image_src" class="img-fluid" :style="{width:'100vw'}" alt="Responsive image">
    </mdb-modal>
  </div>
</template>

<script>
  import { mdbModal} from 'mdbvue';
  import { mapGetters, mapActions, mapState } from "vuex";
  export default {
    components: {
      mdbModal
    },
    data(){
        return {
            modal: false
        }
    },
    computed: {
        ...mapState(["imageModal"]),
        ...mapGetters(["getImageModal"]),
    },
    methods: {
        ...mapActions(["toggleImageModalAction"]),
        toggleModalOff(){
            this.toggleImageModalAction({image_src: null, modal: false})
        }
    },
    watch: {
        imageModal(newPayload, oldPayload){
            console.log(`ImageModal updated from ${oldPayload.modal} to ${newPayload.modal}`)
            this.modal = newPayload.modal
        }
    }
  };
</script>
