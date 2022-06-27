<template>
  <b-navbar>
    <b-navbar-nav>
      <b-nav-item href="/tabs">Tabs</b-nav-item>
      <b-nav-item href="/modal">Modal</b-nav-item>
      <b-nav-item href="/progress">Progress</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import BNavbar from "@/components/BNavbar";
import BNavItem from "@/components/BNavItem";
import BNavbarNav from "@/components/BNavbarNav";

export default {
  name: "NavbarView",
  components: {BNavbarNav, BNavbar, BNavItem}
}
</script>

<style scoped>
</style>
