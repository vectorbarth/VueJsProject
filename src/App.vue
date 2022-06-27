<template>
  <b-navbar> </b-navbar>
  <b-tabs>
    <b-tab title="first"> im the first tab</b-tab>
    <b-tab title="Second" :active="true"> im the second tab</b-tab>
    <b-tab title="Disabled"> trolled</b-tab>
  </b-tabs>
</template>

<script>
import BTabs from "@/components/Btabs";
import BTab from "@/components/Btab";


export default {
  name: 'App',
  components: {
    BTab,
    BTabs,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
