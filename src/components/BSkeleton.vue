<template>
  <div class="skeleton" :class="[getAnimationClass(), getVariantClass()]"
    :style="{ height: this.height, width: this.width }"></div>
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

.skeleton.skeleton-animate-wave::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background: linear-gradient(90deg, transparent, hsla(0, 0%, 100%, .4), transparent);
  animation: skeleton-animate-wave 1.75s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .skeleton-animate-wave:after {
    background: none;
    -webkit-animation: none;
    animation: none;
  }
}


@keyframes skeleton-animate-wave {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  to {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.skeleton-animate-fade {
  -webkit-animation: skeleton-animate-fade 0.875s ease-in-out infinite alternate;
  animation: skeleton-animate-fade 0.875s ease-in-out infinite alternate;
}

@media (prefers-reduced-motion: reduce) {
  .skeleton-animate-fade {
    -webkit-animation: none;
    animation: none;
  }
}

@keyframes skeleton-animate-fade {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0.4;
  }
}

.skeleton-animate-throb {
  -webkit-animation: skeleton-animate-throb 0.875s ease-in infinite alternate;
  animation: skeleton-animate-throb 0.875s ease-in infinite alternate;
}

@media (prefers-reduced-motion: reduce) {
  .skeleton-animate-throb {
    -webkit-animation: none;
    animation: none;
  }
}

@keyframes skeleton-animate-throb {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    -webkit-transform: scale(0.975);
    transform: scale(0.975);
  }
}
</style>
