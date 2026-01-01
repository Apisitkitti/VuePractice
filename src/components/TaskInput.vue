<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'
import { ref } from 'vue'

const task = ref('')
const addTodo = useTodoListStore().addTodo

const handleAddTodo = () => {
  if (!task.value) return

  addTodo(task.value)
  task.value = ''
}
</script>

<template>
  <div class="flex justify-center">
    <input
      v-model="task"
      type="text"
      class="rounded-l-xl p-2 bg-gray-200 w-1/4 focus:outline-none"
      placeholder="Add your task"
    />
    <button @click="handleAddTodo" class="bg-green-500 rounded-r-md p-2 font-bold">Add</button>
  </div>
</template>
