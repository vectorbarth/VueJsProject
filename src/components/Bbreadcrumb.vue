<template>
  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item" v-for="(item, index) in items" :key="index" :class="{active: isActive(item)}">
        <a :href="getHref(item)" v-if="!isActive(item)">{{ item.text }}</a>
        <span v-if="isActive(item)">{{ item.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "b-breadcrumb",
  props: {
    items: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(e =>
            (typeof e.text === "string")
            && (typeof e.href === "undefined" || typeof e.href === "string")
            && (typeof e.active === "undefined" || typeof e.active === "boolean")
        ) && value.filter(e => typeof e.active === "boolean" && e.active).length <= 1
      }
    }
  },
  methods: {
    getHref(item) {
      if (typeof item.href !== "string")
        return "#"
      return item.href
    },
    isActive(item) {
      return typeof item.active === "boolean" && item.active
    }
  }
}
</script>

<style scoped>
</style>
