function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayNuevo = [];
  for(var i = 0; i < array.length; i++){
    arrayNuevo.push(array[i] * 2);
  } 
  return arrayNuevo;
}

module.exports = duplicarElementos;
