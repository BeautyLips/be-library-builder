"use strict"

import { beTodoStrike } from "@yournamespace/be-todo-strike"

function beTodoCore() {
  const todos: string[] = []

  function add(value: string): void {
    todos.push(value)
  }

  function remove(index: number): void {
    todos.splice(index, 1)
  }

  function strike(index: number): void {
    if (todos[index]) {
      todos[index] = beTodoStrike(todos[index])
    }
  }

  return {
    todos,
    add,
    remove,
    strike,
  }
}

export { beTodoCore }
