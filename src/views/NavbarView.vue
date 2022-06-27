<template>
  <b-navbar>
    <b-navbar-item href="/Tab">Tabs</b-navbar-item>
    <b-navbar-item href="/Modal">Modal</b-navbar-item>
    <b-navbar-item href="/Progress">Progress</b-navbar-item>
  </b-navbar>
</template>

<script>
import BNavbar from "@/components/BNavbar";
import BNavbarItem from "@/components/BNavbarItem";

export default {
  name: "NavbarView",
  components: {BNavbarItem, BNavbar}
}
</script>

<style scoped>

</style>