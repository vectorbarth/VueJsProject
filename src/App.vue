<template>
  <BNavbar>
    <BNavbarItem href="/Tab"> tabs </BNavbarItem>
    <BNavbarItem href="/Modal"> Modal </BNavbarItem>
    <BNavbarItem href="/Progress"> Progress </BNavbarItem>

  </BNavbar>
  <RouterView></RouterView>
</template>
<script>

import BNavbar from "@/components/BNavbar";
import BNavbarItem from "@/components/BNavbar-item";

export default {
  name: 'App',
  components: {BNavbarItem, BNavbar}
}
</script>

<style>
@import "./css/bootstrap.css";
</style>
