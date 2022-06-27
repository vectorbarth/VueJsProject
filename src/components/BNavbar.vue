<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <slot></slot>
      </ul>
    </div>
  </nav>
</template>

<script>

  import {ref} from "vue";

  export default {
  name: "BNavbar",
    setup (props, {slots}) {
      const navLinks = ref(slots.default().map((link)=> link.props.href))
      console.log(navLinks)
      return {
        navLinks,
      }
    }

}
</script>

<style scoped>
</style>
