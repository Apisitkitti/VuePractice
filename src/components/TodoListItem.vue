<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'
import { IconTrash, IconEdit } from '@tabler/icons-vue'

const props = defineProps<{
  id: number
  title: string
  completed: boolean
}>()

const removeTodo = useTodoListStore().removeTodo
const toggleTodo = useTodoListStore().toggleTodo

const handleDeleteTodo = () => {
  removeTodo(props.id)
}
</script>

<template>
  <div class="flex gap-2 w-1/4 justify-between bg-sky-100 p-2">
    <div class="flex gap-3">
      <input :checked="completed" @change="toggleTodo(id)" type="checkbox" />
      <p :class="['font-bold', completed && 'line-through']">{{ title }}</p>
    </div>
    <div class="flex">
      <IconTrash color="red" @click="handleDeleteTodo" class="rounded-md px-1 cursor-pointer" />
      <IconEdit color="green" class="px-1 cursor-pointer" />
    </div>
  </div>
</template>
