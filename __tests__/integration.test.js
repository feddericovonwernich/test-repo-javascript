/**
 * Integration tests
 */

const { calculator } = require('../src/calculator');
const { stringUtils } = require('../src/utils');

describe('Integration Tests', () => {
  test('calculator and string utils work together', () => {
    const sum = calculator.add(2, 3);
    const result = stringUtils.capitalize(String(sum));
    expect(result).toBe('5');
  });

  test('complex calculation chain', () => {
    const result = calculator.divide(
      calculator.multiply(
        calculator.add(5, 5),
        2
      ),
      4
    );
    expect(result).toBe(5);
  });
});
