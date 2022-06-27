<template>
  <nav class="navbar navbar-expand-lg navbar-light" :class="[getVariantClass(), fixedClass, stickyClass, typeClass]">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-if="navItems !== undefined">
      <ul class="navbar-nav mr-auto">
          <slot></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "b-navbar",
    props : {
      fixed : {
        type: String,
      },
      sticky: {
        type: Boolean,
        default: false
      },
      variant: {
        type: String,
        default: "primary"
      },
      type: {
        type: String,
        default: "dark"
      }
    },
    methods : {
      getVariantClass() {
        return "bg-" + this.variant
      }
    },
    data() {
      return {
        fixedClass: {
          "fixed-bottom": this.fixed === "bottom",
          "fixed-top": this.fixed === "top"
        },
        stickyClass: {
          "sticky": this.sticky
        },
        typeClass: {
          "navbar-dark": this.type === "dark",
          "navbar-light": this.type === "light"
        }
      }
    },
    setup (props, {slots}) {
      const navItems = slots.default().find((node) => node.type.name === "b-navbar-nav")
      return {
        navItems
      }
    }
}
</script>

<style scoped>
</style>
