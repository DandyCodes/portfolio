<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <RouterView class="is-flex is-flex-direction-column" />
</template>

<style>
html {
  height: 100vh;
}

html,
body,
#app,
#app > * {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>