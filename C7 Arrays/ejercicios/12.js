function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var nuevo = [];
  for(var i = 0; i < array.length; i++){
    nuevo.push(array[i].toUpperCase());
  }
  return nuevo;
}

module.exports = convertirStringAMayusculas;
