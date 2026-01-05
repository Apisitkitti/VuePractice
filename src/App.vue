<script setup lang="ts">
import Foot from './components/layout/Foot.vue'
import Navbar from './components/layout/Navbar.vue'
import TodoListUpdate from './views/TodoListUpdate.vue'
import TodoListView from './views/TodoListView.vue'
</script>
<template>
  <main>
    <Navbar />
    <RouterView />
    <Foot />
  </main>
</template>
