<template>
  <div class="dropdown">
    <div class="btn-group" :class="[dropWayClass]">
      <button class="btn dropdown-toggle" type="button" @click="onClick()" :class="[getVariantClass()]" v-if="!split">{{ text }}</button>
      <button type="button" class="btn" :class="[getVariantClass()]" v-if="split">{{ text }}</button>
      <button type="button" class="btn dropdown-toggle dropdown-toggle-split" @click="onClick()" :class="[getVariantClass()]" v-if="split"></button>
      <div class="dropdown-menu-div" :class="[dropWayClass]">
        <div class="dropdown-menu" style="display:block" v-if="menuIsOpen" :class="[dropWayClass]">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "b-dropdown",
  props: {
    dropup: {
      type: Boolean,
      default: false
    },
    dropright: {
      type: Boolean,
      default: false
    },
    dropleft: {
      type: Boolean,
      default: false
    },
    split: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "primary"
    },
    text: {
      type: String,
      default: "Dropdown Button"
    }
  },
  data() {
    return {
      menuIsOpen: false,
      dropWayClass: {
        "dropup": this.isDropup(),
        "dropright": this.isDropright(),
        "dropleft": this.isDropleft()
      },
      splitClass: {
        "dropdown-toggle-split": this.split
      }
    }
  },
  methods: {
    isDropdown() {
      return !(this.dropup || this.dropright || this.dropleft)
    },
    isDropup() {
      return this.dropup
    },
    isDropright() {
      return this.dropright && !this.dropup
    },
    isDropleft() {
      return this.dropleft && !this.dropright && !this.dropup
    },
    getVariantClass() {
      return "btn-" + this.variant
    },
    onClick() {
      this.menuIsOpen = !this.menuIsOpen
    }
  }
}
</script>

<style scoped>
.dropdown-menu-div.dropup {
  rotate: 180deg;
}
.dropdown-menu.dropup {
  top: 100%;
  left: 0;
  rotate: 180deg;
  margin-top: 0.125rem;
}
.dropdown-menu.dropright {
  top: 0;
  left: 100%;
}
.dropdown-menu.dropleft {
  top: 0;
  left: -100%;
}
</style>
