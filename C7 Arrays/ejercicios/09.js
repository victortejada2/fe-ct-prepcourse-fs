function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var random = array[Math.floor(Math.random() * array.length)]
   return random;
}

module.exports = obtenerElementoAleatorio;
