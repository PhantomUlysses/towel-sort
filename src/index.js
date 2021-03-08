
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == [] || matrix == undefined) {
    return [];
  } else {
    matrix = matrix.sort();
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        arr.push(matrix[i]);
      } else {
        arr.push(matrix[i].reverse());
      }
    }
    let result = [];
    return result.concat(...arr);
  }
}
