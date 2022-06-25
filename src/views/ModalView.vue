<template>
  <div id="my-modal"></div>
  <div>
    <button class="btn" @click="showModal = true">Launch centered modal</button>
    <b-modal id="modal-center" :showModal="showModal" centered title="This is the modal title" @on-close="closeModal">
      <p class="my-4">Vertically centered modal!</p>
    </b-modal>
  </div>
</template>


<script>
import BModal from "@/components/BModal";

export default {
  name: "ModalView",
  components: {
    BModal,
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
</style>