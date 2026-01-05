<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const task = ref('')
const store = useTodoListStore()
const { addTodo, editTodo } = store
const router = useRouter()
const props = defineProps<{ id?: number }>()

const handleInputTodo = async () => {
  if (!task.value.trim()) return

  if (props.id) {
    editTodo(props.id, task.value)
    await router.push({ name: 'home' })
  } else {
    addTodo(task.value)
  }

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
      autofocus
    />
    <button
      @click="handleInputTodo"
      :disabled="!task"
      value="task"
      class="bg-green-500 rounded-r-md p-2 font-bold hover:bg-green-600"
    >
      {{ id ? 'Edit' : 'Add' }}
    </button>
  </div>
</template>
