<template>
<div class="tabs">
  <ul class="tabs_header">
    <li v-for="title in tabTitle" :key="title" @click="selectTitle = title" :class = "{selected: title === selectTitle}">
      {{title}}
    </li>
  </ul>
  <slot/>
</div>
</template>

<script>
import {ref, provide} from "vue";

export default {
  props : {
    vertical: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
    card: {
      type: Boolean,
      default: false,
    },
    end: {
      type: Boolean,
      default: false,
    }
  },
  setup (props, { slots }) {
    const tabTitle = ref(slots.default().map((tab) => tab.props.title))
    const index = ref(slots.default().findIndex((tab) => tab.props.active))
    const selectTitle = ref(tabTitle.value[index.value])

    provide("selectedTitle", selectTitle)
    return {
      selectTitle,
      tabTitle,
    }
  },
  name: "b-tabs"
}
</script>

<style scoped>
.btabs {
  max-width: 400px;
  margin: 0 auto;
}

.tabs_header {
  margin-bottom: 10px;
  list-style: none;
  padding: 0;
  display: flex;
}

.tabs_header li {
  width: 80px;
  text-align: center;
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #ddd;
}

.tabs_header li.selected {
  background-color: blue;
  color: white;
}
</style>
