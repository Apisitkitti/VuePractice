<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex gap-2 bg-amber-200">
    <p>{{ title }}</p>
    <button class="bg-red-400 rounded-md px-1">Delete</button>
    <button class="bg-green-200 px-1">Edit</button>
  </div>
</template>
