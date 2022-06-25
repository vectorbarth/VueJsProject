<template>
  <div class="modal" tabindex="-1" role="dialog" v-if="showModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header" v-show="!hideFooter">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer" v-show="!hideFooter">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "b-modal",
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      require: true
    },
    size: {
      type: String,
      default: "md"
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
</style>
