<template>
  <a class="dropdown-item" href="#" :class="{active: active, disabled: disabled}" :style="{pointerEvents: `${disabled ? 'none' : 'auto'}`}">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "BDropdownItem",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
</style>
