import { Fibonacci } from '@/01-fibonacci/fibonacci.js';
import { beforeEach, describe, expect, it } from 'vitest';

describe('fibonacci', () => {
  let fibonacci: Fibonacci;

  beforeEach(() => {
    fibonacci = new Fibonacci();
  });

  it('should throw an error when asking for a negative number', () => {
    expect(() => fibonacci.getFibonacci(-10)).toThrowError('Invalid argument');
  });

  it('should throw an error when asking zero', () => {
    expect(() => fibonacci.getFibonacci(0)).toThrowError('Invalid argument');
  });

  it.each([
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
    [9, 34],
    [10, 55],
    [11, 89],
    [12, 144],
  ])('should get fibonacci number for %i', (i, expected) => {
    expect(fibonacci.getFibonacci(i)).toBe(expected);
  });

  describe('bottom up', () => {
    it.each([
      [1, 1],
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 5],
      [6, 8],
      [7, 13],
      [8, 21],
      [9, 34],
      [10, 55],
      [11, 89],
      [12, 144],
    ])('should get fibonacci number for %i', (i, expected) => {
      expect(fibonacci.getFibonacciBottomUp(i)).toBe(expected);
    });
  });
});
