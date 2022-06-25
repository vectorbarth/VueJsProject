<template>
 <div class="tab-content" v-show="title === selectedTitle">
   <slot></slot>
 </div>
</template>

<script>
import {inject } from 'vue'
export default {
  props: {
    title: {
      type: String
    },
    active: {
      type: Boolean,
      default : false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const selectedTitle = inject("selectedTitle")
    return {
      selectedTitle
    }
  },
  name: "b-tab"
}
</script>

<style scoped>

</style>
