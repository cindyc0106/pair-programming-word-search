const transpose = function (matrix) {
    let transposedMatrix = [
      // arrays pushed into here
    ];
    
    // only for the 0th array, make a var for it so we only look through it
    let firstRow = matrix[0];
  
    // Loop through first row array
    for (const r of firstRow) {
      transposedMatrix.push([r]);
    };
    // push new arrays into transposedMatrix 
    // look at the next arrays, push them into the respective positions
    // based on column number, push array element into respective array that was created within transposedMatrix
    for (let r = 1; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        transposedMatrix[c].push(matrix[r][c]);
      }
    };
    
    // return the transposedMatrix;
    return transposedMatrix;
  };

const wordSearch = (twoDArray, word) => {
  //  Edge case 1: what if the arrays are empty => return false
  //  Edge Case 2: find the word vertically
    // 1. Take a look at same index for ALL the arrays together

  const horizontalJoin = twoDArray.map((nestedArray) => nestedArray.join(""));
  console.log(horizontalJoin);


  for (string of horizontalJoin) {
    if (string.includes(word)) {
      return true;
    }
  }
  
  const verticalJoin = transpose(twoDArray).map((nestedArray) => nestedArray.join(""));
  console.log(verticalJoin);


  for (string of verticalJoin) {
    if (string.includes(word)) {
      return true;
    }
  }

  return false;
};







module.exports = wordSearch;
