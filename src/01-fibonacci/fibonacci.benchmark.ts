import { Fibonacci } from '@/01-fibonacci/fibonacci.js';
import { bench, describe } from 'vitest';

describe('fibonacci', () => {
  bench('large numbers without cache', () => {
    const fibonacci = new Fibonacci();
    fibonacci.getFibonacciWithoutCache(1000);
  });

  bench('large numbers and cache', () => {
    const fibonacci = new Fibonacci();
    fibonacci.getFibonacci(1000);
  });

  bench('large numbers bottom up', () => {
    const fibonacci = new Fibonacci();
    fibonacci.getFibonacciBottomUp(1000);
  });
});
