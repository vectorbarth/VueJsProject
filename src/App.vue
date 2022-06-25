<template>
  <TabsView></TabsView>
  <ModalView></ModalView>
  <ProgressView></ProgressView>
</template>

<script>
import ModalView from "@/views/ModalView";
import ProgressView from "@/views/ProgressView";
import TabsView from "@/views/TabsView";

export default {
  name: 'App',
  components: {TabsView, ProgressView, ModalView}
}
</script>

<style>
@import "./css/bootstrap.css";
</style>
