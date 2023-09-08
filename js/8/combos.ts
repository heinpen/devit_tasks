function combos(
  targetSum: number,
  currentSum = 0,
  start = 1,
  combination: number[] = [],
  result: number[][] = []
) {
  // Base case: if currentSum is equal to targetSum, push the combination to the result
  if (currentSum === targetSum) {
    result.push([...combination]);
    return;
  }

  // iterate through the numbers from start to targetSum - currentSum push the number to the combination
  // call the function recursively with currentSum + i and pop the number from the combination the was pushed
  for (let i = start; i <= targetSum - currentSum; i++) {
    combination.push(i);
    combos(targetSum, currentSum + i, i, combination, result);
    combination.pop();
  }

  return result;
}

combos(3);
// Output:
// [
//   [ 3 ],
//   [ 1, 1, 1 ],
//   [ 1, 2 ]
// ]

combos(10);
// Output:
// [
//   [ 10 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
//   [ 1, 1, 1, 1, 1, 1, 1, 3 ],
//   [ 1, 1, 1, 1, 1, 1, 4 ],
//   [ 1, 1, 1, 1, 1, 5 ],
//   [ 1, 1, 1, 1, 6 ],
//   [ 1, 1, 1, 7 ],
//   [ 1, 1, 8 ],
//   [ 1, 9 ],
//   [ 1, 1, 1, 1, 1, 1, 2, 2 ],
//   [ 1, 1, 1, 1, 1, 2, 3 ],
//   [ 1, 1, 1, 1, 2, 4 ],
//   [ 1, 1, 1, 1, 2, 2, 2 ],
//   [ 1, 1, 1, 1, 3, 3 ],
//   [ 1, 1, 1, 2, 5 ],
//   [ 1, 1, 1, 2, 2, 3 ],
//   [ 1, 1, 1, 3, 4 ],
//   [ 1, 1, 2, 6 ],
//   [ 1, 1, 2, 2, 4 ],
//   [ 1, 1, 2, 2, 2, 2 ],
//   [ 1, 1, 2, 3, 3 ],
//   [ 1, 1, 3, 5 ],
//   [ 1, 1, 4, 4 ],
//   [ 1, 2, 7 ],
//   [ 1, 2, 2, 5 ],
//   [ 1, 2, 2, 2, 3 ],
//   [ 1, 2, 3, 4 ],
//   [ 1, 3, 6 ],
//   [ 1, 3, 3, 3 ],
//   [ 1, 4, 5 ],
//   [ 2, 8 ],
//   [ 2, 2, 6 ],
//   [ 2, 2, 2, 4 ],
//   [ 2, 2, 2, 2, 2 ],
//   [ 2, 2, 3, 3 ],
//   [ 2, 3, 5 ],
//   [ 2, 4, 4 ],
//   [ 3, 7 ],
//   [ 3, 3, 4 ],
//   [ 4, 6 ],
//   [ 5, 5 ]
// ]

