import { describe, expect, it } from "@jest/globals"
import { summer } from "../index"

describe("Summer", () => {
  it("should be return sub of two number", () => {
    // Arrange
    const a = 2
    const b = 2
    const sut = summer
    const expected = 4

    // Act
    const actual = sut(a, b)

    // Assert
    expect(actual).toBe(expected)
  })
})
