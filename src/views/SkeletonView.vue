<template>
  <div class="my-skeleton">
    <b-skeleton width="85%"></b-skeleton>
    <b-skeleton width="55%"></b-skeleton>
    <b-skeleton width="70%" variant="warning"></b-skeleton>
  </div>
</template>

<script>
import BSkeleton from "@/components/BSkeleton";

export default {
  name: "SkeletonView",
  components: {BSkeleton}
}
</script>

<style scoped>
</style>
