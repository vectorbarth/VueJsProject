<template>
  <div class="progress">
    <div class="progress-bar" role="progressbar" :style="{width: getProcessPercent() + '%'}" :aria-valuenow="value" :aria-valuemin="barMin" :aria-valuemax="barMax" :class="[getVariantClass(), animatedClass, stripedClass]">
      <span v-if="showProgress">{{ getProcessPercent() }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "b-progress",
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    variant: {
      type: String,
      default: "primary"
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      barMin: 0,
      barMax: 100,
      animatedClass: {
        "progress-bar-animated": this.animated
      },
      stripedClass: {
        "progress-bar-striped": this.striped
      }
    }
  },
  methods: {
    getVariantClass() {
      return "bg-" + this.variant
    },
    getProcessPercent() {
      const res = Number(100 * Number(this.value) / (this.barMax - this.barMin));
      return Math.max(this.barMin, Math.min(res, this.barMax))
    }
  }
}
</script>

<style scoped>
</style>