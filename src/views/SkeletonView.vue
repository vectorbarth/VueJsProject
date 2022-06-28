<template>
  <div class="my-skeleton">
    <b-skeleton width="85%"></b-skeleton>
    <b-skeleton width="55%" animation="fade"></b-skeleton>
    <b-skeleton width="70%" variant="warning" animation="throb"></b-skeleton>
    <b-skeleton width="100%" variant="success" animation="none"></b-skeleton>
  </div>
</template>

<script>
import BSkeleton from "@/components/BSkeleton";

export default {
  name: "SkeletonView",
  components: { BSkeleton }
}
</script>

<style scoped>
</style>
