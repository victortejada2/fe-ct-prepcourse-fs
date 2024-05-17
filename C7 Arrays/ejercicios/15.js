function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var maxNum = array[0];
  var maxIndex = 0;
  array.forEach(function(num,indice) {
    if(num > maxNum){maxNum = num; maxIndex = indice};
  });
  return maxIndex;
}

module.exports = encontrarIndiceMayor;
