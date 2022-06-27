<template>
  <ul class="nav nav-tabs">
    <li class="nav-item" v-for="(tabTitle, index) in tabsTitle" :key="index" @click="!tabsDisableStatus[index] ? activeTabIndex = index : {}">
      <a class="nav-link" href="#" :class="{active: index === activeTabIndex, disabled: tabsDisableStatus[index]}">{{ tabTitle }}</a>
    </li>
  </ul>
  <slot/>
</template>

<script>
import {ref, provide} from "vue";

export default {
  name: "b-tabs",
  props : {
    vertical: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
    card: {
      type: Boolean,
      default: false,
    },
    end: {
      type: Boolean,
      default: false,
    }
  },
  setup (props, { slots }) {
    const tabsTitle = ref(slots.default().map((tab) => tab.props.title))
    const tabsDisableStatus = ref(slots.default().map((tab) => tab.props.disabled !== undefined))
    let activeTabIndex = ref(slots.default().findIndex((tab) => tab.props.active !== undefined))

    provide("tabsTitle", tabsTitle)
    provide("activeTabIndex", activeTabIndex)

    return {
      tabsTitle,
      tabsDisableStatus,
      activeTabIndex,
    }
  }
}
</script>

<style scoped>
</style>
