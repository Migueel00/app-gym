import { sum } from "@/src/helpers/helpers";

describe('test the sum function', () => {
  it('should calculate correctly the sum of 2 number and round floor the result', () => {
      const result = sum(2.4, 3);

      expect(result).toBe(5);
  });
});