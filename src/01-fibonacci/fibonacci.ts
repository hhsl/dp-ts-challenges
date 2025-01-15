export class Fibonacci {
  cache = new Map();

  private *range(count: number): IterableIterator<number> {
    for (let i = 0; i < count; ++i) {
      yield i;
    }
  }

  getFibonacciWithoutCache(i: number): number {
    if (i === 0 || i < -1) {
      throw new Error('Invalid argument');
    }

    let result = 0;
    if (i <= 2) {
      result = 1;
    } else {
      result = this.getFibonacci(i - 2) + this.getFibonacci(i - 1);
    }

    return result;
  }

  getFibonacci(i: number): number {
    if (i === 0 || i < -1) {
      throw new Error('Invalid argument');
    }

    if (this.cache.has(i)) {
      return this.cache.get(i);
    }

    let result = 0;
    if (i <= 2) {
      result = 1;
    } else {
      result = this.getFibonacci(i - 2) + this.getFibonacci(i - 1);
    }

    this.cache.set(i, result);

    return result;
  }

  getFibonacciBottomUp(n: number): number {
    if (n === 0 || n < -1) {
      throw new Error('Invalid argument');
    }

    if (this.cache.has(n)) {
      return this.cache.get(n);
    }

    for (const i of this.range(n + 1)) {
      let result: number;

      if (i <= 2) {
        result = 1;
      } else {
        result = this.cache.get(i - 2) + this.cache.get(i - 1);
      }

      this.cache.set(i, result);
    }

    return this.cache.get(n);
  }
}
