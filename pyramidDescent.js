const fs = require('fs');

const descendPyramid = (input) => {
  // read input file and split by newline
  let contents = fs.readFileSync(input, 'utf-8').split('\n');
  // split first line by space and get target value
  let target = contents[0].split(' ')[1];
  // splice pyramid from contents and map to list
  let pyramid = contents.splice(1).map(level => level.split(','));

  let dfTraverse = (pyramid, target, index, depth, product, path) => {
    product *= pyramid[depth][index];
    //console.log(depth, index, path, product, target);
    if (depth === pyramid.length - 1 && product === target) {
      console.log(path);
      return;
    }
    if (depth < pyramid.length - 1) {
      return dfTraverse(pyramid, target, index, depth + 1, product, path + 'L') ?? dfTraverse(pyramid, target, index + 1, depth + 1, product, path + 'R');
    }
  }

  dfTraverse(pyramid, Number(target), 0, 0, 1, '');
}

descendPyramid('./sample_input.txt');