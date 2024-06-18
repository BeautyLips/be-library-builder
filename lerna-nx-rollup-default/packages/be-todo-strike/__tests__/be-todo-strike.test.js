"use strict"

import { describe, expect, test } from "@jest/globals"
import { beTodoStrike } from "../dist/lib/esm/be-todo-strike.js"

describe("be-todo-strike", () => {
  test("should be return string", () => {
    // arrange
    const sut = beTodoStrike
    const value = "todo"
    const expected = "todo: Done"

    // act
    const actual = sut(value)

    // assert
    expect(actual).toBe(expected)
  })
})
