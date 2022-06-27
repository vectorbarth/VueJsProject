<template>
  <li class="nav-item">
  <a class="nav-link" :href="href">
    <slot/>
  </a>
  </li>
</template>

<script>
export default {
  name: "b-nav-item",
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
