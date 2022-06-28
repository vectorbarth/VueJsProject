<template>
<div class="skeleton" :class="[getAnimationClass(), getVariantClass()]" :style="{height: this.height, width: this.width}"></div>
</template>

<script>
export default {
  name: "b-skeleton",
  props: {
    animation: {
      type: String,
      default: "wave"
    },
    height: {
      type: String
    },
    width: {
      type: String,
      required: true
    },
    variant: {
      type: String
    }
  },
  methods: {
    getAnimationClass() {
      const prefix = "skeleton-animate-"
      const animationsList = ["wave", "fade", "throb", "None"]
      if (animationsList.includes(this.animation))
        return prefix + this.animation.toLowerCase()
      return prefix + "none"
    },
    getVariantClass() {
      if (this.variant === undefined)
        return undefined
      return "bg-" + this.variant
    }
  }
}
</script>

<style scoped>
.skeleton {
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, .12);
  cursor: wait;
  mask-image: radial-gradient(#fff, #000);
  height: 1rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
}
.skeleton .skeleton-animate-wave {
}
</style>
