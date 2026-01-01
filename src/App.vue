<script setup lang="ts">
import Foot from './components/layout/Foot.vue'
import Navbar from './components/layout/Navbar.vue'
import TodoListView from './views/TodoListView.vue'
</script>
<template>
  <main>
    <Navbar />
    <TodoListView />
    <Foot />
  </main>
</template>
