<template>
  <div id="my-progress">
    <b-progress :value="25" variant="success" striped :animated="animate"></b-progress>
    <b-progress :value="50" variant="info" striped :animated="animate" class="mt-2"></b-progress>
    <b-progress :value="75" variant="warning" striped :animated="animate" class="mt-3"></b-progress>
    <b-progress :value="100" variant="danger" :animated="animate" class="mt-4"></b-progress>
  </div>
</template>

<script>
import BProgress from "@/components/BProgress";
export default {
  name: "ProgressView",
  components: {BProgress},
  data() {
    return {
      animate: true
    }
  }
}
</script>

<style scoped>
</style>
