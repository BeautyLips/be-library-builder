"use strict"

import { describe, expect, test } from "@jest/globals"
import { beTodoCore } from "../dist/lib/esm/be-todo-core.js"

describe("be-todo", () => {
  test("should be add todo", () => {
    // arrange
    const sut = beTodoCore()
    const value = "todo"

    // act
    sut.add(value)
    const actual = sut.todos

    // assert
    expect(actual).toHaveLength(1)
    expect(actual).toContain(value)
  })

  test("should be remove todo", () => {
    // arrange
    const sut = beTodoCore()
    const value = "todo"
    sut.add(value)

    // act
    sut.remove(0)
    const actual = sut.todos

    // assert
    expect(actual).toHaveLength(0)
  })

  test("should be remove todo", () => {
    // arrange
    const sut = beTodoCore()
    const value = "todo"
    sut.add(value)
    sut.add(value)

    // act
    sut.remove(0)
    const actual = sut.todos

    // assert
    expect(actual).toHaveLength(1)
  })

  test("should be strike todo", () => {
    // arrange
    const sut = beTodoCore()
    const value = "todo"
    const expected = "todo: Done"
    sut.add(value)

    // act
    sut.strike(0)
    const actual = sut.todos[0]

    // assert
    expect(actual).toBe(expected)
  })
})
