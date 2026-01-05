<script setup lang="ts">
import TaskInput from '@/components/TaskInput.vue'
import { useTodoListStore } from '@/stores/todoListStore'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const taskId = computed(() => {
  const id = route.params.id
  return id
})
const todoList = useTodoListStore()
const todo = todoList.todoList.find((todo) => todo.id === Number(taskId.value))
const router = useRouter()

onMounted(() => {
  if (!todo) {
    router.push({ name: 'home' })
  }
})
</script>

<template>
  <div class="w-full my-2">
    <TaskInput :id="todo?.id" />
    <p
      class="text-center mx-auto bg-gray-100 my-2 p-4 font-bold w-xl rounded-4xl border border-amber-500"
    >
      {{ todo?.title || '' }}
    </p>
  </div>
</template>
