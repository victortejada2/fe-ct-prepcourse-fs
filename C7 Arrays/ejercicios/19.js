function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if(arguments.length === 0){
    return 0;
  }
  var resultado = 1;
  for(var i = 0; i < arguments.length; i++){
    resultado = resultado * arguments[i];
  }
  return resultado;
}

module.exports = multiplicarArgumentos;
