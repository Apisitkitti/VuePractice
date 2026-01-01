import { defineStore } from 'pinia'

interface TodoItem {
  id: number
  title: string
  completed: boolean
}

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [] as TodoItem[],
  }),
  actions: {
    addTodo(title: string) {
      this.todoList.push({ id: Date.now(), title, completed: false })
    },
    toggleTodo(id: number) {
      const todo = this.todoList.find((todo) => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(id: number) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id)
    },
    editTodo(id: number, title: string) {
      const todo = this.todoList.find((todo) => todo.id === id)
      if (todo) {
        todo.title = title
      }
    },
  },
})
