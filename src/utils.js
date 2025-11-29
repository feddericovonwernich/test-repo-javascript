/**
 * Utility functions for string manipulation
 */

const stringUtils = {
  capitalize: (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  reverse: (str) => {
    return str.split('').reverse().join('');
  },

  isPalindrome: (str) => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
};

module.exports = { stringUtils };
