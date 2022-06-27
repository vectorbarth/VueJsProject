<template>
  <teleport to="#my-modal">
    <div class="modal" tabindex="-1" role="dialog" v-if="showModal" :style="{ display: `${showModal ? 'block': 'hide'}` }">
      <div role="document" :class="[centeredClass, sizeClass]">
        <div class="modal-content">
          <div class="modal-header" v-show="!hideHeader">
            <h5 class="modal-title">{{ title }}</h5>
            <button type="button" class="close" @click="$emit('on-close')">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer" v-show="!hideFooter">
            <button type="button" class="btn btn-secondary" @click="$emit('on-close')">Cancel</button>
            <button type="button" class="btn btn-primary" @click="$emit('on-close')">OK</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
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
  },
  data() {
    return {
      centeredClass: {
        "modal-dialog": !this.centered,
        "modal-dialog-centered": this.centered
      },
      sizeClass: {
        "modal-sm": this.size === "sm",
        "modal-md": this.size === "md",
        "modal-lg": this.size === "lg",
        "modal-xl": this.size === "xl",
      }
    }
  },
  emits: ["on-close"]
};
</script>

<style scoped>
</style>
