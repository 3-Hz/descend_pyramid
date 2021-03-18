const fs = require('fs');

const traverse = (pyramid, target, index = 0, depth = 0, product = 1, path = '') => {
  product *= pyramid[depth][index];
  // base case: return path when product is equal to target and path has reached bottom
  if (depth === pyramid.length - 1 && product === target) {
    return path;
  }
  // short circuit path if product exceeds target
  if (Math.abs(product) > Math.abs(target)) {
    return;
  }
  // recurse to bottom of pyramid, backtracking when path is not valid
  if (depth < pyramid.length - 1) {
    return traverse(pyramid, target, index, depth + 1, product, path + 'L') || traverse(pyramid, target, index + 1, depth + 1, product, path + 'R');
  }
}

const descendPyramid = (input) => {
  // read input file and split by newline
  let contents = fs.readFileSync(input, 'utf-8').split('\n');

  // split first line by space and get target value
  let target = Number(contents[0].split(' ')[1]);

  // splice pyramid from contents and map to list
  let pyramid = contents.splice(1).map(level => level.split(','));

  // handle empty pyramid edge case
  if (!pyramid.length) {
    return 'no pyramid';
  }

  // find and print path if found, if not, print no path found
  return traverse(pyramid, target) || 'no path found';
}

module.exports = descendPyramid;