<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'
import TodoListItem from './TodoListItem.vue'

const todoList = useTodoListStore()
</script>

<template>
  <div
    v-for="todo in todoList.todoList"
    :key="todo.id"
    class="flex flex-col justify-center items-center p-1"
  >
    <TodoListItem :id="todo.id" :title="todo.title" :completed="todo.completed" />
  </div>
</template>
