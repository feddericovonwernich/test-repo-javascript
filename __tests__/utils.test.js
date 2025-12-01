/**
 * Tests for utility functions
 */

const { stringUtils } = require('../src/utils');

describe('String Utils', () => {
  describe('capitalize', () => {
    test('capitalizes first letter', () => {
      expect(stringUtils.capitalize('hello')).toBe('Hello');
    });

    test('handles empty string', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    test('handles already capitalized string', () => {
      expect(stringUtils.capitalize('World')).toBe('World');
    });
  });

  describe('reverse', () => {
    test('reverses a string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    test('reverses empty string', () => {
      expect(stringUtils.reverse('')).toBe('');
    });
  });

  describe('isPalindrome', () => {
    test('detects palindrome', () => {
      expect(stringUtils.isPalindrome('racecar')).toBe(true);
    });

    test('detects non-palindrome', () => {
      expect(stringUtils.isPalindrome('hello')).toBe(false);
    });

    test('handles palindrome with spaces', () => {
      expect(stringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
    });
  });
});
