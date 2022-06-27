<template>
<div id="my-dropdown">
  <b-dropdown text="Dropdown Button" class="m-md-2" variant="secondary">
    <b-dropdown-item>First action</b-dropdown-item>
    <b-dropdown-item>Second action</b-dropdown-item>
    <b-dropdown-item>Third action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>
import BDropdown from "@/components/BDropdown";
import BDropdownItem from "@/components/BDropdownItem";
import BDropdownDivider from "@/components/BDropdownDivider";

export default {
  name: "DropdownView",
  components: {BDropdownDivider, BDropdownItem, BDropdown}
}
</script>

<style scoped>
</style>
