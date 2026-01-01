<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'

const props = defineProps<{
  id: number
  title: string
}>()

const removeTodo = useTodoListStore().removeTodo

const handleDeleteTodo = () => {
  removeTodo(props.id)
}

console.log(props.id, props.title)
</script>

<template>
  <div class="flex gap-2 w-1/4 justify-between bg-gray-400 p-2">
    <p class="font-bold">{{ props.title }}</p>
    <div>
      <button @click="handleDeleteTodo" class="rounded-md px-1 cursor-pointer">Delete</button>
      <button class="px-1 cursor-pointer">Edit</button>
    </div>
  </div>
</template>
