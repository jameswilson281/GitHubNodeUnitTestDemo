// app.test.js
const sum = require('./app');
const y = 1;
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});