// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

var flipAndInvertImage = function(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    for (let j = arr[i].length - 1; j >= 0; j--) {
      let currentItem = arr[i][j];
      if (currentItem === 1) {
        currentItem = 0;
      } else {
        currentItem = 1;
      }
      tempArr.push(currentItem);
    }
    result.push(tempArr);
  }
  return result;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
