<template>
  <div id="my-breadcrumb">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
import BBreadcrumb from "@/components/Bbreadcrumb";

export default {
  name: "BreadcrumView",
  components: {BBreadcrumb},
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#"
        },
        {
          text: "Manage",
          href: "#"
        },
        {
          text: "Library",
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
