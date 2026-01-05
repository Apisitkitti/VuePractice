import { defineStore } from 'pinia'
import { ref } from 'vue'

interface TodoItem {
  id: number
  title: string
  completed: boolean
}

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref<TodoItem[]>([])

  const addTodo = (title: string) => {
    todoList.value.push({ id: Date.now(), title, completed: false })
  }
  const toggleTodo = (id: number) => {
    const todo = todoList.value.find((todo) => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }
  const removeTodo = (id: number) => {
    todoList.value = todoList.value.filter((todo) => todo.id !== id)
  }
  const editTodo = (id: number, title: string) => {
    const todo = todoList.value.find((todo) => todo.id === id)
    if (todo) {
      todo.title = title
    }
  }
  return {
    todoList,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
  }
})
