<template>
  <NavbarView></NavbarView>
  <RouterView></RouterView>
</template>

<script>
import NavbarView from "@/views/NavbarView";
export default {
  name: 'App',
  components: {NavbarView},
}
</script>

<style>
@import "./css/bootstrap.css";
</style>
