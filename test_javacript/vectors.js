function findShortest(vectors) {
  let shortestVector = 999999999;
  let idxOfShortestVector;
  vectors.forEach((vector, idx) => {
    let vectorSquareLength = 0;
    vector.forEach((el) => {
      vectorSquareLength += el * el;
    });
    const vectorLength = Math.sqrt(vectorSquareLength);
    if (vectorLength < shortestVector) {
      shortestVector = vectorLength;
      idxOfShortestVector = idx;
    }
  });
  return vectors[idxOfShortestVector];
}

var vectors = [
  [2, 2, 2],
  [1, 1, 1],
  [3, 3, 3],
];
var shortest = findShortest(vectors);
console.log(shortest);
