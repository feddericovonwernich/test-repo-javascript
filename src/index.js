/**
 * Main entry point for the application
 */

const { calculator } = require('./calculator');
const { stringUtils } = require('./utils');

function main() {
  console.log('Test Repo JavaScript');
  console.log('Calculator: 5 + 3 =', calculator.add(5, 3));
  console.log('String Utils:', stringUtils.capitalize('hello'));
}

if (require.main === module) {
  main();
}

module.exports = { main };
