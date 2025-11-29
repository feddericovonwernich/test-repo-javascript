/**
 * Tests for calculator module
 */

const { calculator } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(calculator.add(-1, -1)).toBe(-2);
    });

    test('adds zero', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('multiplies two numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('throws error on division by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero');
    });
  });
});
