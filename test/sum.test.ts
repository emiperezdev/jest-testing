import { sum } from "../src/sum";

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    const result = sum(5, 5);
    expect(result).toBe(10);
  });
});
