# Pyramid Descent Puzzle Solver

## Overview

This solution uses a recursive backtracking algorithm to navigate possible paths, checking if the product of numbers in the path is equal to target once the path reaches the bottom of the pyramid. The algorithm was optimized by short circuiting the recursive calls if the absolute value of the product exceeds the absolute value of the product. This solution can handle negative numbers in the pyramid, as well as negative targets.

## How to Run

> Install the test suite dependencies with `npm install`

> Run the test suite with `npm run test`