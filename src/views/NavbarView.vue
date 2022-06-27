<template>
  <div id="my-navbar">
    <b-navbar variant="info" type="dark">
      <b-navbar-nav>
        <b-nav-item href="/tabs">Tabs</b-nav-item>
        <b-nav-item href="/modal">Modal</b-nav-item>
        <b-nav-item href="/dropdown">Dropdown</b-nav-item>
        <b-nav-item href="/progress">Progress</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
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
