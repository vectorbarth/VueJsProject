<template>
<b-breadcrumb :items="items"></b-breadcrumb>
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
