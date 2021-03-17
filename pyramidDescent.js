const fs = require('fs');

const descendPyramid = (input) => {
  // read input file and split by newline
  let contents = fs.readFileSync(input, 'utf-8').split('\n');
  // split first line by space and get target value
  let target = Number(contents[0].split(' ')[1]);
  // splice pyramid from contents and map to list
  let pyramid = contents.splice(1).map(level => level.split(','));

  let dfTraverse = (pyramid, target, index = 0, depth = 0, product = 1, path = '') => {
    product *= pyramid[depth][index];
    if (depth === pyramid.length - 1 && product === target) {
      return path;
    }
    if (product > target) {
      return;
    }
    if (depth < pyramid.length - 1) {
      return dfTraverse(pyramid, target, index, depth + 1, product, path + 'L') || dfTraverse(pyramid, target, index + 1, depth + 1, product, path + 'R');
    }
  }

  console.log(dfTraverse(pyramid, target));
}

descendPyramid('./sample_input.txt');