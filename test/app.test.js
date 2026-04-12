const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('../app');

test('add(a, b) should return the sum of two numbers', () => {
  assert.equal(add(2, 3), 5);
});
