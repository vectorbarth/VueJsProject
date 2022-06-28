<template>
 <div class="tab-content" v-if="title === tabsTitle[activeTabIndex]">
   <slot></slot>
 </div>
</template>

<script>
import {inject } from 'vue'

export default {
  name: "b-tab",
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
    const tabsTitle = inject("tabsTitle")
    const activeTabIndex = inject("activeTabIndex")
    return {
      tabsTitle,
      activeTabIndex
    }
  }
}
</script>

<style scoped>
</style>
