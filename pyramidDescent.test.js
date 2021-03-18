const descendPyramid = require('./pyramidDescent.js');

test('solves for positive numbers', () => {
  expect(descendPyramid('./test_inputs/solveable.txt')).toBe('LRLL');
});

test('handles negative numbers', () => {
  expect(descendPyramid('./test_inputs/negative.txt')).toBe('LRLL');
});

test('handles no solution', () => {
  expect(descendPyramid('./test_inputs/unsolveable.txt')).toBe('no path found');
});

test('handles no pyramid', () => {
  expect(descendPyramid('./test_inputs/emptypyramid.txt')).toBe('no pyramid');
});